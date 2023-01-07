export enum EventType {
  LECTURE = "lecture",
  BREAK = "break",
  ACTION = "action",
}

export enum OnlineMode {
  ONLINE = "online",
  OFFLINE = "offline",
  PARTIAL = "partial",
}

export type Logo = string;
export type Name = string;
export type Description = string;
export type Version = string;

export type Day = {
  slug: string;
  name: string;
  date: string;
};

export type DayWithActive = Day & {
  active?: boolean;
};

export type Room = {
  slug: string;
  name: string;
  color?: string;
};

export type Type = {
  id: EventType;
  color?: string;
};

export type Event = {
  slug: string;
  title: string;
  description?: string;
  type: EventType;
  day: string;
  roomSlug?: string;
  timeStart: string;
  timeEnd: string;
  mode?: OnlineMode;
  color?: string;
};
