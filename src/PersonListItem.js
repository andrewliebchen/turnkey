import React from "react";
import store from "./store";
import { view } from "react-easy-state";

const PersonListItem = props => {
  const person = store.people.find(person => props.id === person.id);
  return (
    <div>
      <img src={person.image} alt="avatar" height={24} width={24} />
      <div>
        {person.firstName} {person.lastName} {props.count}
        <br />
        <small>{person.type}</small>
      </div>
    </div>
  );
};

export default view(PersonListItem);
