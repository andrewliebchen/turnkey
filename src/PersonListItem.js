import React from "react";
import store from "./store";
import { view } from "react-easy-state";
import { Text, Image } from "rebass";

const PersonListItem = props => {
  const person = store.people.find(person => props.id === person.id);
  return (
    <div>
      <Image
        variant="avatar"
        src={person.image}
        alt="avatar"
        height={24}
        width={24}
      />
      <div>
        <Text>
          {person.firstName} {person.lastName} {props.count}
        </Text>
        <Text fontSize={1}>{person.type}</Text>
      </div>
    </div>
  );
};

export default view(PersonListItem);
