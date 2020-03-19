// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// We can use a function that will be called in our App
//function getButtonText() {
////return "Click on me!";
//}

// Create a React component
const App = function() {
  const buttonText = { text: "Click me!" };
  const labelText = "Enter name:";
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Variables can be referenced between {}

// Take the React component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
