import { Boat } from "../boat/Boat";
import { Price } from "../price/Price";
import { Schedule } from "../schedule/Schedule";

export type Tour = {
  boats?: Array<Boat>;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  prices?: Array<Price>;
  schedules?: Array<Schedule>;
  updatedAt: Date;
};
