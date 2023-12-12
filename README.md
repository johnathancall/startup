# Bookmarker++

## Description Deliverable

### Elevator Pitch

Consider "Dave's Pancakes", Dave's budding business. In the infancy of his business, he is still learning what websites he needs to use to purchase ingredients, to research his competition, and to attain the newest technologies in the booming pancake industry. However, as time goes on, he realizes that he now uses the same websites to complete each of these tasks, and he loses valuable time needing to reopen each of these websites. Even more difficult, sometimes these websites are down and he only finds out once he attempts to access them! What is Dave to do?

Fortunately for Dave, the gracious, glorious, and incredibly humble inventor of this project released Bookmarker++. Now, Dave can record all of his necessary websites in handy directories for each topic! Additionally, Bookmarker++ informs him whenever any of these servers are down, so he does not need to wonder if his own connection has failed or not. 

Once Dave implements Bookmarker++ into his business, "Dave's Pancakes" will be featured in every corner of the world. Because his managing time has been cut in half, all other breakfast commodities will become more irrelevant than the 2015 Fantastic Four movie. Truly, Bookmarker++ is the key for economic triumph and lasting joy.

### Design

![20230923_151933](https://github.com/johnathancall/startup/assets/22202701/515668cb-acd2-4fa7-a8ac-d5db8ec4ae13)

### Key Features

- Secure login over HTTPS
- Ability to add websites and directories
- Ability to remove websites and directories
- Websites persistently stored
- Display of each website's status upon open directory

### Technologies

I will implement these technologies as described.

- HTML - Uses correct HTML structure for application. Two HTML pages. One for login and one for website directory. Hyperlinks to choice website.
- CSS - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
- JavaScript - Provides login, website addition, and display of website status.
- DB - Store users and website directory in database.
- Websocket - Real-time updates as to each website's status.

## HTML Deliverable

For this deliverable I outlined a loose structure of my website with HTML, consisting of the following features:
- HTML pages for the index, websites, and about sections of the website and links between them
- Text content describing the purpose of the website as well as placeholding for user websites/directories
- Image to add flavor to the about.html page
- Login placeholder with username and password on the index.html page
- Data placeholder in the form of websites and directories, which will be added by the user and stored in the database
- WebSocket placeholder depicting the status of each webpage

## CSS Deliverable

I styled my website using CSS by doing the following:
- Added background colors to all subdomains
- Created rulesets for directories and websites
- Created header and footer that remains constant across all subdomains

## JS Deliverable

I removed the directory capability because I wasn't satisfied with how the CSS looked for it, and renamed the "Add Directory" button to "Add Website".

I added functionality to my website by doing the following:
- Saved username and password to localStorage
- Implemented functionality for the Add Website button, that gives the user a popup message to include which website they want to add
- Implemented functionality for the Remove Website button, that removes the selected website
- Implemented stubs for future database and WebSocket functionality

## WebServices Deliverable

I used Node.js and Express to convert my application into a web service.

Served up my frontend using Express static middleware.

Provided endpoints, namely for accessing the current list of websites and adding a new website, and referenced them from the frontend.

Added third-part endpoints, specifically by referencing random quote and picture generators in the 'about' page.

## Database Deliverable

Included /register/ and /login/ endpoints, called upon register and login respectively

Added database.js to create new collection for each user under the startup database

## Login Deliverable

Included support for new user registration and existing user authentication

Included calls to store and retrieve credentials in MongoDB

Removed the ability to access the "Websites" and "About" subdomains without logging in first.

## Websocket Deliverable

Removed status functionality.

Utilized communication over websockets to display the most recently added website to all users.