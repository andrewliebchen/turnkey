import React from "react";
import people from "./data";

const App = () => (
  <div>
    <ul>
      {people.map(person => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ul>
  </div>
);

export default App;
