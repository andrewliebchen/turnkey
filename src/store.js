import { store } from "react-easy-state";
import { people, chats } from "./data";
import Ids from "ids";

const ids = new Ids();

const turnkeyStore = store({
  people: people,
  chats: chats,
  selectedId: null,
  chatInput: "",

  createChat(value, parentId, createdById) {
    turnkeyStore.chats.push({
      id: ids.next(),
      createdAt: Date.now(),
      modifiedAt: Date.now(),
      parentId: parentId,
      createdBy: createdById,
      text: value
    });
  }
});

export default turnkeyStore;
