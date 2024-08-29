import { TourWhereUniqueInput } from "../tour/TourWhereUniqueInput";

export type PriceCreateInput = {
  amount?: number | null;
  date?: Date | null;
  quantity?: number | null;
  tour?: TourWhereUniqueInput | null;
};
