import { SortOrder } from "../../util/SortOrder";

export type BoatOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  tourId?: SortOrder;
  updatedAt?: SortOrder;
};
