import faker from "faker";
import { Schema } from "faker-schema";
import Ids from "ids";

const ids = new Ids();

const personSchema = new Schema(() => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  image: faker.image.avatar(),
  id: ids.next()
}));

export const people = personSchema.make(5);
