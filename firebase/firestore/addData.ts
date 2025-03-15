import firebase_app from "../config";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(firebase_app)
export default async function addData(collection: string, id: string, data: Record<string, any>) {
    let error = null;

    try {
    await setDoc(doc(db, collection, id), data, { merge: true, });
    } catch (e) {
        if (e instanceof Error) {
            error = e; // TypeScript now recognizes error as an Error object
          } else {
            error = new Error(String(e)); // Ensure it's always an Error instance
          }
    }

    return error;
}