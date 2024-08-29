import { TourWhereUniqueInput } from "../tour/TourWhereUniqueInput";

export type ScheduleCreateInput = {
  date?: Date | null;
  price?: number | null;
  time?: Date | null;
  tour?: TourWhereUniqueInput | null;
};
