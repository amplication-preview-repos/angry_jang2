import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { TourWhereUniqueInput } from "../tour/TourWhereUniqueInput";

export type ScheduleWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  time?: DateTimeNullableFilter;
  tour?: TourWhereUniqueInput;
};
