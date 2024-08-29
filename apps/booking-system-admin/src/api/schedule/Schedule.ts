import { Tour } from "../tour/Tour";

export type Schedule = {
  createdAt: Date;
  date: Date | null;
  id: string;
  price: number | null;
  time: Date | null;
  tour?: Tour | null;
  updatedAt: Date;
};
