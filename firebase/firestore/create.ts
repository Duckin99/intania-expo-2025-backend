import { doc, getFirestore, setDoc } from "firebase/firestore";
import firebase_app from "../config";
import { getCollectionName } from "./utils";

const db = getFirestore(firebase_app);

export async function createDocument(
  collectionName: string,
  id: string,
  data: Record<string, any>
) {
  collectionName = getCollectionName(collectionName);
  const docRef = doc(db, collectionName, id);

  try {
    await setDoc(docRef, data);
    return { result: data, error: null };
  } catch (error) {
    return { result: null, error: error };
  }
}
