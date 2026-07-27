import React from "react";
import ReactDOM from "react-dom/client";

// const head1 = document.createElement("h1");
// head1.innerHTML = "Hello Rahul from JS";

// const root = document.getElementById("root");
// root.appendChild(head1);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is Nested H1 of child 1"),
    React.createElement("h2", {}, "This is Nested H2 of child 1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is Nested H1 of child 2"),
    React.createElement("h2", {}, "This is Nested H2 of child 2"),
  ]),
]);

console.log(parent, ":: PARENT");

const headReact = React.createElement(
  "h1",
  { id: "react-heading" },
  "Hello Rahul from React External",
);

console.log(headReact, ": headReacr");

const rootReact = ReactDOM.createRoot(document.getElementById("root"));
// rootReact.render(headReact);
rootReact.render(parent);
