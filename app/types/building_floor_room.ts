import { UUID } from "crypto";

export type Building = {
  id: UUID;
  name: string;
  slug?: string;
  images: URL[];
  floorsId: UUID[];
};

export type Floor = {
  id: UUID;
  name: string;
  slug?: string;
  roomsId: UUID[];
};

export type Room = {
  id: UUID;
  name: string;
  event?: string;
  body?: string; //! Markdown
};
