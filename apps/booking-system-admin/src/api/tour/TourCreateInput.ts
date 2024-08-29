import { BoatCreateNestedManyWithoutToursInput } from "./BoatCreateNestedManyWithoutToursInput";
import { PriceCreateNestedManyWithoutToursInput } from "./PriceCreateNestedManyWithoutToursInput";
import { ScheduleCreateNestedManyWithoutToursInput } from "./ScheduleCreateNestedManyWithoutToursInput";

export type TourCreateInput = {
  boats?: BoatCreateNestedManyWithoutToursInput;
  description?: string | null;
  name?: string | null;
  prices?: PriceCreateNestedManyWithoutToursInput;
  schedules?: ScheduleCreateNestedManyWithoutToursInput;
};
