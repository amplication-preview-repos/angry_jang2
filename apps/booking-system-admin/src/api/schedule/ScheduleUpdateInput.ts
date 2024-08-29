import { TourWhereUniqueInput } from "../tour/TourWhereUniqueInput";

export type ScheduleUpdateInput = {
  date?: Date | null;
  price?: number | null;
  time?: Date | null;
  tour?: TourWhereUniqueInput | null;
};
