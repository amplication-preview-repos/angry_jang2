import { TourWhereUniqueInput } from "../tour/TourWhereUniqueInput";

export type PriceUpdateInput = {
  amount?: number | null;
  date?: Date | null;
  quantity?: number | null;
  tour?: TourWhereUniqueInput | null;
};
