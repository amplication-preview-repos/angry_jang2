import { BoatWhereInput } from "./BoatWhereInput";
import { BoatOrderByInput } from "./BoatOrderByInput";

export type BoatFindManyArgs = {
  where?: BoatWhereInput;
  orderBy?: Array<BoatOrderByInput>;
  skip?: number;
  take?: number;
};
