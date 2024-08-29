import { TourWhereUniqueInput } from "../tour/TourWhereUniqueInput";

export type BoatUpdateInput = {
  name?: string | null;
  price?: number | null;
  tour?: TourWhereUniqueInput | null;
};
