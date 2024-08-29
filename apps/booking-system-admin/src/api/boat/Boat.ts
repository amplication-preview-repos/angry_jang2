import { Tour } from "../tour/Tour";

export type Boat = {
  createdAt: Date;
  id: string;
  name: string | null;
  price: number | null;
  tour?: Tour | null;
  updatedAt: Date;
};
