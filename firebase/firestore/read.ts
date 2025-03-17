import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import firebase_app from "../config";
import { getCollectionName } from "./utils";

const db = getFirestore(firebase_app);

export async function getDocument(collectionName: string, id: string) {
  collectionName = getCollectionName(collectionName);
  let docRef = doc(db, collectionName, id);

  try {
    const result = await getDoc(docRef);
    return { result, error: null };
  } catch (error) {
    return { result: null, error };
  }
}

export async function getAllDocuments(collectionName: string) {
  collectionName = getCollectionName(collectionName);
  const collectionRef = collection(db, collectionName);

  try {
    const result = await getDocs(collectionRef);
    return { result, error: null };
  } catch (error) {
    return { result: null, error };
  }
}
