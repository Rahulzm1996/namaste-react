import React from "react";
import ReactDOM from "react-dom/client";

//React React.createElement => ReactElement JS (object) => HTMLElement(render)
const heading = React.createElement("h2", { id: "h2" }, "namaste react");

//JSX => transpiled (using babel) => React.createElement => ReactElement JS (object) => HTMLElement(render)
const jsxHeading = <h1>This is a JSX heading</h1>;

console.log({ heading, jsxHeading });

//React Functional Component (Any function that return a React.Element)

const Title = () => <h2>component composition</h2>;

const HeadingComponent = () => {
  return (
    <div>
      <Title />
      <h2>{console.log(213213)}</h2>
      <h1>This is a JSX heading from Functional component</h1>
    </div>
  );
};

//cross site scrpting testing.

const expressionToEvaluate = () => {
  console.log("external code is running", window.localStorage);
};

const userInput = "Hi, <img src='' onerror='alert(0)' />"; //JSX escapes this img code

const SampleComponent = () => {
  return (
    <h1>
      hey...{expressionToEvaluate()}
      {userInput}
      {/* Hi, <img src="" onError={() => alert("an error occured")} /> */}
    </h1>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<SampleComponent />);
// root.render(SampleComponent()); //other way of calling a react functional component
