import { SortOrder } from "../../util/SortOrder";

export type PriceOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  quantity?: SortOrder;
  tourId?: SortOrder;
  updatedAt?: SortOrder;
};
