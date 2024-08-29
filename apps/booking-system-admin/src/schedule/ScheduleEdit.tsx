import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TourTitle } from "../tour/TourTitle";

export const ScheduleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Date" source="date" />
        <NumberInput label="Price" source="price" />
        <DateTimeInput label="Time" source="time" />
        <ReferenceInput source="tour.id" reference="Tour" label="Tour">
          <SelectInput optionText={TourTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
