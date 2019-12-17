import React from "react";
import { people, chats } from "./data";

console.log(people);
console.log(chats);

const App = () => (
  <div>
    <h3>People</h3>
    <ul>
      {people.map(person => (
        <li key={person.id}>
          <img src={person.image} alt="avatar" height={24} width={24} />
          {person.firstName} {person.lastName}
        </li>
      ))}
    </ul>

    <hr />
    <h3>Details</h3>
    <p>Select a person</p>
    <hr />

    <h3>Chat</h3>
    <p>Select a person</p>
    <input type="text" placeholder="Add a comment" />
  </div>
);

export default App;
