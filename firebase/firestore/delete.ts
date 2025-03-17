import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import firebase_app from "../config";
import { getCollectionName } from "./utils";

const db = getFirestore(firebase_app);

export default async function deleteDoument(collection: string, id: string) {
  const collectionName = getCollectionName(collection);
  const docRef = doc(db, collectionName, id);
  try {
    await deleteDoc(docRef);
    return { result: true, error: null };
  } catch (error) {
    return { result: false, error: error };
  }
}
