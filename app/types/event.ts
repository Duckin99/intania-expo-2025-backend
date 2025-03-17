import { UUID } from "crypto";
import { Timestamp } from "firebase/firestore";
import { IntaniaLocation } from "./intania_location";

export type Event = {
  id: UUID;
  name: string;
  body?: String; //! Markdown
  startTime?: Timestamp;
  endTime?: Timestamp;
  location?: IntaniaLocation;
  tagsId: UUID[];
  picture?: string;
};

export type EventTag = {
  id: UUID;
  name: string;
};
