import { BoatUpdateManyWithoutToursInput } from "./BoatUpdateManyWithoutToursInput";
import { PriceUpdateManyWithoutToursInput } from "./PriceUpdateManyWithoutToursInput";
import { ScheduleUpdateManyWithoutToursInput } from "./ScheduleUpdateManyWithoutToursInput";

export type TourUpdateInput = {
  boats?: BoatUpdateManyWithoutToursInput;
  description?: string | null;
  name?: string | null;
  prices?: PriceUpdateManyWithoutToursInput;
  schedules?: ScheduleUpdateManyWithoutToursInput;
};
