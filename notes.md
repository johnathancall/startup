### In the following code, what does the link element do?

Defines the relationship between the current document and an external resource.

### In the following code,  what does a div tag do?

Divides the HTML into different blocks

### In the following code, what is the difference between the #title and .grid selector?

#title references the element with id 'title', and .grid adds classifications to anything with the class grid

### In the following code, what is the difference between padding and margin?

Padding is immediately beside the content, while margin is more general

![image](https://github.com/johnathancall/startup/assets/22202701/65443188-01c6-487b-81fc-d116f84efbf5)

### Given this HTML and this CSS how will the images be displayed using flex?

flex: 0 80px; Zero means it will not grow and 80px means it has a starting basis height of 80 pixels. This creates a fixed size box.
flex: 1; display: flex; One means it will get one fractional unit of growth

### What does the following padding CSS do?

Creates space inside element around its content

### What does the following code using arrow syntax function declaration do?

Creates a function object with code inside the curly braces, "return" is optional if one line and no braces

### What does the following code using map with an array output?

Run a function to map an array to a new array

const a = [1, 2, 3];

console.log(a.map((i) => i + i));
// OUTPUT: [2,4,6]
console.log(a.reduce((v1, v2) => v1 + v2));
// OUTPUT: 6
console.log(a.sort((v1, v2) => v2 - v1));
// OUTPUT: [3,2,1]

a.push(4);
console.log(a.length);
// OUTPUT: 4

### What does the following code output using getElementByID and addEventListener?

See BYU green

All DOM elements support the ability to attach a function that gets called when an event occurs on the element. These functions are called event listeners. Here is an example of an event listener that gets called when an element gets clicked.

const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});

### What does the following line of Javascript do using a # selector?

It selects an element by its id

### Which of the following are true? (mark all that are true about the DOM)

The Document Object Model (DOM) is an object representation of the HTML elements that the browser uses to render the display. The browser also exposes the DOM to external code so that you can write programs that dynamically manipulate the HTML.

The browser provides access to the DOM through a global variable name document that points to the root element of the DOM. If you open the browser's debugger console window and type the variable name document you will see the DOM for the document the browser is currently rendering.

### By default, the HTML span element has a default CSS display property value of: 

inline

### How would you use CSS to change all the div elements to have a background color of red?

div {
  background-color: red;
}

### How would you display an image with a hyperlink in HTML?

<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/BYU_Cougars_logo.svg/2560px-BYU_Cougars_logo.svg.png alt="BYU Logo" width="256" height="133">

### In the CSS box model, what is the ordering of the box layers starting at the inside and working out?

Content, padding, order, margin

### Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?

#text1 {
  color: green;
}

### What will the following code output when executed using a for loop and console.log?



### How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?

const myElement = document.getElementById("byu");
myElement.style.color = "green";

### What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?

p, ol, ul, h2, h1, h3

### How do you declare the document type to be html?

<!DOCTYPE html>

### What is valid javascript syntax for if, else, for, while, switch statements?

if(a === 1) {}
else {}

for(let i = 0; i < 10; i++) {}

const obj = { a: 1, b: 'fish' };
for (const name in obj) {
  console.log(name);
}
// OUTPUT: a
// OUTPUT: b

const arr = ['a', 'b'];
for (const val of arr) {
  console.log(val);
}
// OUTPUT: 'a'
// OUTPUT: 'b'

while(true) {}

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

### What is the correct syntax for creating a javascript object?

const obj = { a: 1, b: 'fish' };

### Is is possible to add new properties to javascript objects?

Yes, store.numBananas = 3

### If you want to include JavaScript on an HTML page, which tag do you use?

<script></script>

### Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?

getElementByID()

### Which of the following correctly describes JSON?

SON provides a simple, and yet effective way, to share and store data. By design JSON is easily convertible to, and from, JavaScript objects. This make it a very convenient data format when working with web technologies. Because of its simplicity, standardization, and compatibility with JavaScript, JSON has become one of the world's most popular data formats.

{
  "class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null
}

### What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?

chmod - changes file mode
pwd - prints name of current/working directory
cd - move to directory
ls - list items in directory
vim - open vim
nano - open nano
mkdir - make directory
mv - move file from one directory to another
rm - remove file/directory
man - open man page
ssh - secure remote shell
ps - list current processes
wget - download files
sudo - execute command as another user

### Which of the following console command creates a remote shell session?

ssh

### Which of the following is true when the -la parameter is specified for the ls console command?

Includes all directories/files beginning with .

### Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?

click, bozo, banana & fruit

### Is a web certificate is necessary to use HTTPS.

Yes

### Can a DNS A record can point to an IP address or another A record.

Yes

### Port 443, 80, 22 is reserved for which protocol?

HTTPS, HTTP, SSH

### What will the following code using Promises output when executed?

