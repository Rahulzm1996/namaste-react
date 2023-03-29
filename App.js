const heading = React.createElement(
  "h1",
  { id: "h1" },
  "Hello world from react!"
);
const child = React.createElement("div", { id: "child" }, [heading, heading]);
const parent = React.createElement("div", { id: "parent" }, child);

console.log({ parent });

const root = ReactDOM.createRoot(document.getElementById("root"));
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root.render(parent);
root1.render(parent);
