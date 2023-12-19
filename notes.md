## What ports are used for HTTP, HTTPS, SSH?

  80, 443, 20

## What do HTTP status codes in the 300, 400, 500 range indicate?

  Redirect, client error, server error

## What does the HTTP header content-type allows you to do?

  Specify type of file being received, i.e. plaintext, jpg, etc.

## What do the following attributes of a cookie do?

### Domain
   A domain name that the browser uses to determine whether it should send the cookie in a request

### Path
  A domain name path that the browser uses to determine whether it should send the cookie in a request

### SameSite
  On strict, does not allow cross-domain requests, used to protect data theft

### HTTPOnly
  Browser should access cookie only if it wants to send an HTTP message only, i.e., it should not access it by Javascript code in a downloaded page

## Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /foo/bar?

Make sure to be careful when reading the paths and make sure appended things are correct

## Given the following Express service code: What does the following JavaScript fetch return?



## Given the following MongoDB query { cost: { $gt: 10 }, name: /fran.*/} select all of the matching documents.

Returns any items with names beginning in 'fran' and with a cost greater than 10

## How should you store user passwords in a database?

Hashed and salted

## Assuming the following Node.js service code is executing with websockets, what will be logged to the console of the web browser?

FIXME: look at Simon websocket code

## What is the WebSocket protocol used for?

Real-time, event-driven communication between clients and servers, can be used for client-to-client communication

## What is JSX and how are the curly braces rendered?

Everything inside the curly braces is calling a function (sometimes arrow syntax necessary) or storing a variable

## Assuming a HTML document with a  <div id="root"></div> element, what content will the following React component generate?
      function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }
      function App() {
        return (
          <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
          </div>
        );
      }
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<App />);

List of "Hello, Sara; Hello, Cahal; etc."

## Assuming a HTML document with a <div id="root"></div> element, what content will the following React component generate?
    function Numbers() { 
      const numbers = [1, 2, 3, 4, 5];
      const listItems = numbers.map((number) =>
        <li>{number}</li>
      );
      return(<ul>{listItems}</ul>)
    }
    const root = ReactDOM.createRoot(document.getElementById('root')); 
    root.render(<Numbers/>);

Prints a bulleted list of 1, 2, 3, 4, 5

## What does the following React component do?
function Example() {
  // Declare a new state variable, which we'll call "count"  
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

  Creates a count with a button that increments the count by 1 every time it is pressed

## What are React Hooks used for?

  allow functions to have access to state and other React features

## What is the useEffect hook used for?

  useEffect - provides side effect of component

## What does this code do?
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

  Creates a router that navigates between Layout, Blogs, Contact

## What role does npm play in web development?

Package manager

## What does package.json do in a npm project?

Manages dependencies

## What does the fetch function do?

Calls apis

## What does node.js do?

Creates a backend, server-side web apps

## What does Vite do?

Vite bundles your code quickly, has great debugging support, and allows you to easily support JSX, TypeScript, and different CSS flavors.
