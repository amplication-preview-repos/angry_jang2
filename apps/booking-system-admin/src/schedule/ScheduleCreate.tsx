import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TourTitle } from "../tour/TourTitle";

export const ScheduleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Date" source="date" />
        <NumberInput label="Price" source="price" />
        <DateTimeInput label="Time" source="time" />
        <ReferenceInput source="tour.id" reference="Tour" label="Tour">
          <SelectInput optionText={TourTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
