import React from "react";
import { people, chats } from "./data";
import store from "./store";
import { view } from "react-easy-state";

console.log(people);
console.log(chats);

const App = () => {
  let selectedPerson = people.find(person => store.selectedId === person.id);
  return (
    <div>
      <h3>People</h3>
      <ul>
        {people.map(person => (
          <li key={person.id}>
            <img src={person.image} alt="avatar" height={24} width={24} />
            {person.firstName} {person.lastName}
            <button onClick={() => (store.selectedId = person.id)}>
              {store.selectedId === person.id ? "Selected" : "Select"}
            </button>
          </li>
        ))}
      </ul>

      <hr />
      <h3>Details</h3>
      {store.selectedId ? (
        <ul>
          <li>
            <img
              src={selectedPerson.image}
              alt="avatar"
              height={48}
              width={48}
            />
          </li>
          <li>
            Name: {selectedPerson.firstName} {selectedPerson.lastName}
          </li>
          <li>ID: {selectedPerson.id}</li>
        </ul>
      ) : (
        <p>Select a person</p>
      )}

      <hr />
      <h3>Chat</h3>
      <p>Select a person</p>
      <input type="text" placeholder="Add a comment" />
    </div>
  );
};

export default view(App);
