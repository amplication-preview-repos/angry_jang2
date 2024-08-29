import { Boat as TBoat } from "../api/boat/Boat";

export const BOAT_TITLE_FIELD = "name";

export const BoatTitle = (record: TBoat): string => {
  return record.name?.toString() || String(record.id);
};
