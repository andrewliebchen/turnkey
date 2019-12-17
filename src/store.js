import { store } from "react-easy-state";
import { people, chats } from "./data";

export default store({
  people: people,
  chats: chats,
  selectedId: null
});
