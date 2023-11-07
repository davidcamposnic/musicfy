import { setDoc, doc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { db } from "../utils";

export class Song {
  collectionName = "songs";
  async create(name, album, file) {
    try {
      const id = uuidv4();
      const created_at = new Date();
      const data = { id, name, album, file, created_at };

      const docRef = doc(db, this.collectionName, id);
      await setDoc(docRef, data);
    } catch (error) {
      throw error;
    }
  }
}