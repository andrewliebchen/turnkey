import React from "react";
import { people } from "./data";

console.log(people);

const App = () => (
  <div>
    <ul>
      {people.map(person => (
        <li key={person.id}>
          <img src={person.image} alt="avatar" height={24} width={24} />
          {person.firstName} {person.lastName}
        </li>
      ))}
    </ul>
  </div>
);

export default App;
