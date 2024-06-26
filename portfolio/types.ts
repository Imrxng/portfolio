export type Language = "en" | "nl";

export interface Message {
  text: string;
  mail: string;
  name: string;
}

export interface User {
  username: string;
  password: string;
}

export interface Visit {
  date: Date;
  ip: string | undefined;
}