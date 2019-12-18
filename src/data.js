import faker from "faker";
import { Schema } from "faker-schema";
import Ids from "ids";
import sample from "@unction/sample";

const personTypes = ["employee", "customer", "candidate"];

const ids = new Ids();

const personSchema = new Schema(() => ({
  id: ids.next(),
  createdAt: Date.now(),
  modifiedAt: Date.now(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  image: faker.image.avatar(),
  type: sample(personTypes)
}));

export const people = personSchema.make(5);

const chatSchema = new Schema(() => ({
  id: ids.next(),
  createdAt: Date.now(),
  modifiedAt: Date.now(),
  parentId: people[0].id,
  createdBy: people[1].id,
  text: faker.lorem.sentence()
}));

export const chats = chatSchema.make(3);
