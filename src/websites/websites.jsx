import React from 'react';
import './websites.css';

import {SiteEvent, SiteNotifier} from './siteNotifier';

export function Websites() {
	const [websites, setWebsites] = React.useState([]);
	const [websiteElements, setWebsiteElements] = React.useState([]);
	const [event, setEvent] = React.useState(null);

	React.useEffect(() => {
		SiteNotifier.addHandler(handleSiteEvent);

		fetch('/api/websites')
			.then((response) => response.json())
			.then((websites) => {
				setWebsites(websites);
				localStorage.setItem('websites', JSON.stringify(websites));
			})
			.catch(() => {
				console.log('error accessing websites');
			});

		return () => {
			SiteNotifier.removeHandler(handleSiteEvent);
		};

  	}, []);

	// Helper functions
	
	function handleSiteEvent(event) {
		setEvent(event);
	}

	function removeWebsite(website) {

		/*this.setState({
			websites: this.state.websites.filter((oldSite) => oldSite.site !== website)
		});*/

  		const remReq = {username: localStorage.getItem("username"), website: website.site};
  
		fetch('api/remove/', {
			method: 'POST',
			headers: {'content-type': 'application/json'},
			body: JSON.stringify(remReq),
		}).then((response) => response.json())
		.then((websites) => {
			console.log(websites);
		}).catch((error) => {
			console.log(error);
		});

		/*let tempWebsites = websites;

		for(const site of websites) {
			console.log(site.site);
			console.log(website.site);
			if(site.site === website.site) {
				tempWebsites.splice(tempWebsites.indexOf(site), 1);
			}
		}

		setWebsites(tempWebsites);*/
		fetch('/api/websites')
			.then((response) => response.json())
			.then((websites) => {
				setWebsites(websites);
				localStorage.setItem('websites', JSON.stringify(websites));
			})
			.catch(() => {
				console.log('error accessing websites');
			});
	}

	async function createWebsite() {
  		let website = prompt("New Website URL:", "https://google.com");
	
	  	const newWebsite = {name: website, username: localStorage.getItem('username')};
	
	  	try {
	    		const response = await fetch('api/website/', {
	      			method: 'POST',
	      			headers: {'content-type': 'application/json'},
	      			body: JSON.stringify(newWebsite),
	    		});    

			let tempWebsites = websites;
			tempWebsites.push(newWebsite);
			setWebsites(tempWebsites);

	    		localStorage.setItem('websites', JSON.stringify(websites));
	  	} catch {
	    		addWebsiteLocal(website);
	  	}
		fetch('/api/websites')
			.then((response) => response.json())
			.then((websites) => {
				setWebsites(websites);
				localStorage.setItem('websites', JSON.stringify(websites));
			})
			.catch(() => {
				console.log('error accessing websites');
			});
	
	  	if(website != null) {
	    		SiteNotifier.broadcastEvent(website);
			setEvent({value: website});
	  	}
	}

	function getWebsiteElements() {
		const websiteElements = [];

		console.log(websites);

		for(const [i, website] of websites.entries()) {
			console.log(website);
			websiteElements.push(
				<div key={i} id={website}>
					<button onClick={() => removeWebsite(website)}>-</button>
					<div className="websiteContainer">
						<a href={website.site} style={{color: 'white'}}>{website.site}</a>
					</div>
				</div>
			);
		}

		return websiteElements;
	}

	function createMsg() {
		if(event != null) {
			console.log('event');
			console.log(event);
			console.log(event.value);
		}
  		return (event != null) ? ('Most recent website: ' + event.value) : 'Most recent website will be displayed';
	}

	return(
		<main>
      			<h4 id="recentWebsite">{createMsg()}</h4>
      			<div className="container" id="container">
        			<button className="addWebsiteButton" onClick={() => createWebsite()}>Add Website</button>
				{getWebsiteElements()}
      			</div>
   		</main>
	);
}
/*async function createWebsite() {
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

    console.log('here');

    const websites = await response.json();
    localStorage.setItem('websites', JSON.stringify(websites));
  } catch {
    addWebsiteLocal(website);
  }

  if(website != null) {
    broadcastEvent(website);

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
}*/

/*function setItemID(itemContainer, website) {
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
}*/


/*loadWebsites();
 *
this.configureWebSocket();*/
