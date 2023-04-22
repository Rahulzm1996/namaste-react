//start writing scripts in package.json

//1.write start and build scripts in script section of package.json
//we can either run - npm run start or npm start (for start we can escape run and can directly write npm start because start is a reserve keywork by npm and it understands it) but for other scripts we have to wite npm run and then script.

//2.JSX - javascript syntax extension for writing HTML/XML like syntax in javascript.(It is not HTML in javascript)

//JSX gets converted to React.createElement using babel

//React React.createElement => ReactElement JS (object) => HTMLElement(render)
// const heading = React.createElement("h2", { id: "h2" }, "namaste react");

//JSX => transpiled (using babel) => React.createElement => ReactElement JS (object) => HTMLElement(render)
// const jsxHeading = <h1>This is a JSX heading</h1>;

//React Functional Component (Any function that return a React.Element)

//JSX prevents cross site scripting in react.
//https://stackoverflow.com/questions/33644499/what-does-it-mean-when-they-say-react-is-xss-protected

//READ about Preventing XSS in React Applications
