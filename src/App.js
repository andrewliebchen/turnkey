import React from "react";
import store from "./store";
import PersonListItem from "./PersonListItem";
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
            <PersonListItem id={person.id} count={getChats(person.id).length} />
            <button onClick={() => (store.selectedId = person.id)}>
              {store.selectedId === person.id ? "Selected" : "Select"}
            </button>
          </li>
        ))}
      </ul>

      <hr />
      <h3>Details</h3>
      {store.selectedId ? (
        <div>
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
            <li>Type: {selectedPerson.type}</li>
            <li>Tags: {selectedPerson.tags}</li>
          </ul>
          <h3>Posts</h3>
          {store.posts
            .filter(post => post.parentId === selectedPerson.id)
            .map(post => (
              <div key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.description}</p>
              </div>
            ))}
        </div>
      ) : (
        <p>Select a person</p>
      )}

      <hr />
      <h3>Chat</h3>
      {store.selectedId ? (
        <div>
          <ul>
            {getChats(store.selectedId).map(chat => (
              <li key={chat.id}>
                <PersonListItem id={chat.createdBy} />
                <p>{chat.text}</p>
              </li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="Add a comment"
            onChange={event => (store.chatInput = event.target.value)}
            value={store.chatInput}
          />
          <button onClick={() => store.createChat()}>Send</button>
        </div>
      ) : (
        <p>Select a person</p>
      )}
    </div>
  );
};

export default view(App);
