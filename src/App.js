import React, { useState } from "react";
import "./App.css";

function App() {
  const [hasName, setHasName] = useState("");

  function handleOptionChange(e) {
    setHasName(e.target.value);

    // This console log seems to be always a step behind when selecting the radio buttons
    console.log(hasName);
  }

  return (
    <div className="App">
      <h1>Do you have a name?</h1>
      <form>
        <label>
          <input
            type="radio"
            name="name"
            value="yes"
            onChange={handleOptionChange}
            checked={hasName === "yes"}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="name"
            value="no"
            onChange={handleOptionChange}
            checked={hasName === "no"}
          />
          No
        </label>
      </form>
    </div>
  );
}

export default App;
