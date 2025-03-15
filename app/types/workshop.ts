import { Timestamp } from "firebase/firestore";

export type Workshop = {
  id: string,
  name: string,
  maxParticipants: number,
  currentParticipants: number,
  timeSlot: Timestamp,
}