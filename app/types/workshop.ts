import { Timestamp } from "firebase/firestore";

export type Workshop = {
  id: string; // 123
  name: string;
  location: string;
  workshopSlots: WorkshopSlot[];
};

export type WorkshopSlot = {
  id: string; // 123-1
  startTime: Timestamp;
  endTime: Timestamp;
  currentParticipants: number;
  maxParticipants: number;
  userStatus: "Registered" | "Not Registered" | "Full"; // generate per user's request
};
