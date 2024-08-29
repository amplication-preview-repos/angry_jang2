import { BoatListRelationFilter } from "../boat/BoatListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PriceListRelationFilter } from "../price/PriceListRelationFilter";
import { ScheduleListRelationFilter } from "../schedule/ScheduleListRelationFilter";

export type TourWhereInput = {
  boats?: BoatListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  prices?: PriceListRelationFilter;
  schedules?: ScheduleListRelationFilter;
};
