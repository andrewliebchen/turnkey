import React from "react";
import store from "./store";
import { view } from "react-easy-state";

const getChats = id => store.chats.filter(chat => id === chat.parentId);

const App = () => {
  let selectedPerson = store.people.find(
    person => store.selectedId === person.id
  );

  return (
    <div>
      <h3>People</h3>
      <ul>
        {store.people.map(person => (
          <li key={person.id}>
            <img src={person.image} alt="avatar" height={24} width={24} />
            {`${person.firstName} ${person.lastName} ${
              getChats(person.id).length
            }`}
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
      <ul>
        {getChats(store.selectedId).map(chat => (
          <li key={chat.id}>
            <small>{chat.createdBy}</small>
            <p>{chat.text}</p>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a comment"
        disabled={!store.selectedId}
        onChange={event => (store.chatInput = event.target.value)}
      />
      <button
        onClick={() =>
          store.createChat(
            store.chatInput,
            store.selectedId,
            store.people[1].id
          )
        }
      >
        Send
      </button>
    </div>
  );
};

export default view(App);
