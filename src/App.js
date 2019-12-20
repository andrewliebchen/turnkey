import React from "react";
import store from "./store";
import PersonListItem from "./PersonListItem";
import { view } from "react-easy-state";
import { Text, Heading, Button, Image, Flex, Box } from "rebass";
import { Input } from "@rebass/forms";

const getChats = id => store.chats.filter(chat => id === chat.parentId);

const App = () => {
  let selectedPerson = store.people.find(
    person => store.selectedId === person.id
  );

  return (
    <Flex flexDirection="columns" width={1}>
      <Box width={1 / 5}>
        <Heading>People</Heading>
        <ul>
          {store.people.map(person => (
            <li key={person.id}>
              <PersonListItem
                id={person.id}
                count={getChats(person.id).length}
              />
              <Button onClick={() => (store.selectedId = person.id)}>
                {store.selectedId === person.id ? "Selected" : "Select"}
              </Button>
            </li>
          ))}
        </ul>
      </Box>
      <Box width={2 / 5}>
        <Heading>Details</Heading>
        {store.selectedId ? (
          <div>
            <ul>
              <li>
                <Image
                  variant="avatar"
                  src={selectedPerson.image}
                  alt="avatar"
                  height={48}
                  width={48}
                />
              </li>
              <li>
                <Text>
                  Name: {selectedPerson.firstName} {selectedPerson.lastName}
                </Text>
              </li>
              <li>
                <Text>ID: {selectedPerson.id}</Text>
              </li>
              <li>
                <Text>Type: {selectedPerson.type}</Text>
              </li>
              <li>
                <Text>Tags: {selectedPerson.tags}</Text>
              </li>
            </ul>
            <Heading>Posts</Heading>
            {store.posts
              .filter(post => post.parentId === selectedPerson.id)
              .map(post => (
                <div key={post.id}>
                  <Heading fontSize={2}>{post.title}</Heading>
                  <Text>{post.description}</Text>
                </div>
              ))}
          </div>
        ) : (
          <Text>Select a person</Text>
        )}
      </Box>
      <Box width={2 / 5}>
        <Heading>Chat</Heading>
        {store.selectedId ? (
          <div>
            <ul>
              {getChats(store.selectedId).map(chat => (
                <li key={chat.id}>
                  <PersonListItem id={chat.createdBy} />
                  <Text>{chat.text}</Text>
                </li>
              ))}
            </ul>
            <Input
              type="text"
              placeholder="Add a comment"
              onChange={event => (store.chatInput = event.target.value)}
              value={store.chatInput}
            />
            <Button onClick={() => store.createChat()}>Send</Button>
          </div>
        ) : (
          <Text>Select a person</Text>
        )}
      </Box>
    </Flex>
  );
};

export default view(App);
