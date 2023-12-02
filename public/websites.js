async function loadWebsites() {
  let websites = [];
  try {
    const response = await fetch('/api/websites');
    websites = await response.json();

    console.log(response);
    console.log(websites);

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
  console.log(localStorage.getItem('regRes'));

  let website = prompt("New Website URL:", "https://google.com");

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

  const statusText = document.createElement('p');
  statusText.textContent = getStatus(website);

  websiteContainer.appendChild(websiteText);

  itemContainer.appendChild(removeButton);
  itemContainer.appendChild(websiteContainer);
  itemContainer.appendChild(statusText);

  const parentContainer = document.querySelector('#container');
  parentContainer.appendChild(itemContainer);
}

function setItemID(itemContainer, website) {
  if(document.getElementById(website) == null) {
    itemContainer.id = website;
    return;
  }
  website = website + '1';
  setItemID(itemContainer, website);
}

function removeWebsite(website) {
  const element = document.getElementById(website);

  // Remove API needs implementation

  element.remove();
}

function getStatus(website) {		// Will eventually return actual status
  return 'Status: Running';
}

loadWebsites();
