function createWebsite() {
  let website = prompt("New Website URL:", "https://google.com");

  if(website != null && website != "") {
    addWebsite(website);
  }
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

  function addWebsiteToDB(website);
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
  element.remove();
}

function getStatus(website) {           // Will eventually return actual status
  return 'Status: Running';
}

function addWebsiteToDB(website) {      // Will eventually add website to database under username

}
