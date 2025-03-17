import { UUID } from "crypto";
import { IntaniaLocation } from "./intania_location";

export type Event = {
  id: UUID;
  name: string;
  body?: string; //! Markdown
  startTime?: Date;
  endTime?: Date;
  tagsId: UUID[];
  picture?: string;

  intaniaLocation?: IntaniaLocation;
  intaniaLocationId?: string;
};

export type EventTag = {
  id: UUID;
  name: string;
};
