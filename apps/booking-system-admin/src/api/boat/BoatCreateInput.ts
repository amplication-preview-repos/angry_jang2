import { TourWhereUniqueInput } from "../tour/TourWhereUniqueInput";

export type BoatCreateInput = {
  name?: string | null;
  price?: number | null;
  tour?: TourWhereUniqueInput | null;
};
