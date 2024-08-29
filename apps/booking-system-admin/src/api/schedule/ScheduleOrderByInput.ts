import { SortOrder } from "../../util/SortOrder";

export type ScheduleOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  time?: SortOrder;
  tourId?: SortOrder;
  updatedAt?: SortOrder;
};
