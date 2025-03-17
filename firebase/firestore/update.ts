import { doc, getFirestore, setDoc } from "firebase/firestore";
import firebase_app from "../config";
import { getCollectionName } from "./utils";

const db = getFirestore(firebase_app);

export async function updateDocument(
  collectionName: string,
  id: string,
  data: Record<string, any>
) {
  collectionName = getCollectionName(collectionName);
  const docRef = doc(db, collectionName, id);

  try {
    const result = await setDoc(docRef, data, { merge: true });
    return { result, error: null };
  } catch (error) {
    return { result: null, error };
  }
}
