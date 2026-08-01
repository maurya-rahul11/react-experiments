import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Container from "./components/Container";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Container />
    </div>
  );
};

const rootReact = ReactDOM.createRoot(document.getElementById("root"));
rootReact.render(<AppLayout />);
