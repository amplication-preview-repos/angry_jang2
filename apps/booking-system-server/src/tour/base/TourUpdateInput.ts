/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BoatUpdateManyWithoutToursInput } from "./BoatUpdateManyWithoutToursInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { PriceUpdateManyWithoutToursInput } from "./PriceUpdateManyWithoutToursInput";
import { ScheduleUpdateManyWithoutToursInput } from "./ScheduleUpdateManyWithoutToursInput";

@InputType()
class TourUpdateInput {
  @ApiProperty({
    required: false,
    type: () => BoatUpdateManyWithoutToursInput,
  })
  @ValidateNested()
  @Type(() => BoatUpdateManyWithoutToursInput)
  @IsOptional()
  @Field(() => BoatUpdateManyWithoutToursInput, {
    nullable: true,
  })
  boats?: BoatUpdateManyWithoutToursInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => PriceUpdateManyWithoutToursInput,
  })
  @ValidateNested()
  @Type(() => PriceUpdateManyWithoutToursInput)
  @IsOptional()
  @Field(() => PriceUpdateManyWithoutToursInput, {
    nullable: true,
  })
  prices?: PriceUpdateManyWithoutToursInput;

  @ApiProperty({
    required: false,
    type: () => ScheduleUpdateManyWithoutToursInput,
  })
  @ValidateNested()
  @Type(() => ScheduleUpdateManyWithoutToursInput)
  @IsOptional()
  @Field(() => ScheduleUpdateManyWithoutToursInput, {
    nullable: true,
  })
  schedules?: ScheduleUpdateManyWithoutToursInput;
}

export { TourUpdateInput as TourUpdateInput };
