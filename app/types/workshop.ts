import { UUID } from "crypto";
import { Timestamp } from "firebase/firestore";
import { IntaniaLocation } from "./intania_location";

export type Workshop = {
  id: UUID;
  name: string;
  slots: WorkshopSlot[];
  location?: IntaniaLocation;
};

export type WorkshopSlot = {
  id: UUID;
  workshopId: UUID;
  startTime: Timestamp;
  endTime: Timestamp;
  currentRegistrantCount: number;
  maxRegistrantCount?: number;
};

export type WorkshopSlotResponse = {
  id: UUID;
  workshopId: UUID;
  startTime: Timestamp;
  endTime: Timestamp;
  currentRegistrantCount: number;
  maxRegistrantCount?: number;
  visitorStatus?: "registered" | "checkedIn";
};
