import { Tour } from "../tour/Tour";

export type Price = {
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  quantity: number | null;
  tour?: Tour | null;
  updatedAt: Date;
};
