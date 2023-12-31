async function loadWebsites() {

  if(localStorage.getItem('newWebsiteMsg') != null) {
    console.log('here');
    displayMsg(localStorage.getItem('newWebsiteMsg'));
  }

  let websites = [];
  try {
    const response = await fetch('/api/websites');

    localStorage.setItem('websites', JSON.stringify(websites));
    if(websites.length > 0) {
      for(const obj of websites) {
	if(obj.site != null) {
          addWebsite(obj.site);
	}
      }
    }
  } catch (err) {
    console.log(err);
    const websitesText = localStorage.getItem('websites');
    if (websitesText) {
      websites = JSON.parse(websitesText);
    }
    if(websites.length > 0) {
      for(const website of websites) {
        addWebsite(website);
      }
    }
  }
}

async function createWebsite() {
  let website = prompt("New Website URL:", "https://google.com");

  if(document.getElementById(website) != null) {
    return createWebsiteFailed();
  }

  if(website != null && website != "") {
    addWebsite(website);
  }

  const newWebsite = {name: website, username: localStorage.getItem('username')};

  try {
    const response = await fetch('api/website/', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(newWebsite),
    });    

    const websites = await response.json();
    localStorage.setItem('websites', JSON.stringify(websites));
  } catch {
    this.addWebsiteLocal(website);
  }

  if(website != null) {
    this.broadcastEvent(website);

    const introString = 'Most recently added website: ';
    displayMsg(introString.concat(website));
  }
}

async function createWebsiteFailed() {
  let website = prompt("Website already in list. New Website URL:", "https://google.com");

  if(document.getElementById(website) != null) {
	  return createWebsiteFailed();
  }

  if(website != null && website != "") {
    addWebsite(website);
  }

  const newWebsite = {name: website, username: localStorage.getItem('username')};

  try {
    const response = await fetch('api/website/', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(newWebsite),
    });    

    const websites = await response.json();
    localStorage.setItem('websites', JSON.stringify(websites));
  } catch {
    this.addWebsiteLocal(website);
  }
}

function addWebsiteLocal(website) {
  let websites = [];
  const websitesText = localStorage.getItem('websites');
  if(websitesText) {
    websites = JSON.parse(websitesText);
  }

  websites.push(website);

  localStorage.setItem('websites', JSON.stringify(websites));
}


function addWebsite(website) {
  const itemContainer = document.createElement('div');

  setItemID(itemContainer, website);

  const websiteContainer = document.createElement('div');
  websiteContainer.className = 'websiteContainer';

  const removeFunction = function() {
    removeWebsite(itemContainer.id);
  }

  const removeButton = document.createElement('button');
  removeButton.textContent = '-';
  removeButton.addEventListener('click', removeFunction);

  const websiteText = document.createElement('a');
  websiteText.href = website;
  websiteText.textContent = website;
  websiteText.style.color = "white";

  websiteContainer.appendChild(websiteText);

  itemContainer.appendChild(removeButton);
  itemContainer.appendChild(websiteContainer);

  const parentContainer = document.querySelector('#container');
  parentContainer.appendChild(itemContainer);
}

function setItemID(itemContainer, website) {
  if(document.getElementById(website) == null) {
    itemContainer.id = website;
    return;
  }
}

async function removeWebsite(website) {
  const element = document.getElementById(website);

  const remReq = {username: localStorage.getItem("username"), website: website};
  
  try {
    const response = await fetch('api/remove/', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(remReq),
    });    

    const websites = await response.json();

    localStorage.setItem('websites', JSON.stringify(websites));

  } catch(err) {
    console.log(err);
  }

  element.remove();
}

// WS stuff
function configureWebSocket() {
  try {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    this.socket.onopen = (event) => {
    };
    this.socket.onclose = (event) => {
    };
    this.socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      this.displayMsg(`Most recently added website: ${msg.value}`);
    };
  } catch(err) {
    console.log(err);
  }
}

function displayMsg(msg) {
  const newWebsite = document.querySelector('#recentWebsite');

  localStorage.setItem('newWebsiteMsg', msg);

  newWebsite.innerText = msg;
}

function broadcastEvent(value) {
  const event = {
    value: value,
  };
  this.socket.send(JSON.stringify(event));
}


loadWebsites();
this.configureWebSocket();
