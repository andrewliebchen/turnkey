import { store } from "react-easy-state";
import { people, chats } from "./data";
import Ids from "ids";

const ids = new Ids();

const turnkeyStore = store({
  people: people,
  chats: chats,
  selectedId: null,
  chatInput: "",

  createChat() {
    turnkeyStore.chats.push({
      id: ids.next(),
      createdAt: Date.now(),
      modifiedAt: Date.now(),
      parentId: turnkeyStore.selectedId,
      createdBy: people[0].id,
      text: turnkeyStore.chatInput
    });
    turnkeyStore.chatInput = "";
  }
});

export default turnkeyStore;
