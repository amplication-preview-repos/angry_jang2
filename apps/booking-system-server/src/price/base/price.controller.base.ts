/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PriceService } from "../price.service";
import { PriceCreateInput } from "./PriceCreateInput";
import { Price } from "./Price";
import { PriceFindManyArgs } from "./PriceFindManyArgs";
import { PriceWhereUniqueInput } from "./PriceWhereUniqueInput";
import { PriceUpdateInput } from "./PriceUpdateInput";

export class PriceControllerBase {
  constructor(protected readonly service: PriceService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Price })
  async createPrice(@common.Body() data: PriceCreateInput): Promise<Price> {
    return await this.service.createPrice({
      data: {
        ...data,

        tour: data.tour
          ? {
              connect: data.tour,
            }
          : undefined,
      },
      select: {
        amount: true,
        createdAt: true,
        date: true,
        id: true,
        quantity: true,

        tour: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Price] })
  @ApiNestedQuery(PriceFindManyArgs)
  async prices(@common.Req() request: Request): Promise<Price[]> {
    const args = plainToClass(PriceFindManyArgs, request.query);
    return this.service.prices({
      ...args,
      select: {
        amount: true,
        createdAt: true,
        date: true,
        id: true,
        quantity: true,

        tour: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Price })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async price(
    @common.Param() params: PriceWhereUniqueInput
  ): Promise<Price | null> {
    const result = await this.service.price({
      where: params,
      select: {
        amount: true,
        createdAt: true,
        date: true,
        id: true,
        quantity: true,

        tour: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Price })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePrice(
    @common.Param() params: PriceWhereUniqueInput,
    @common.Body() data: PriceUpdateInput
  ): Promise<Price | null> {
    try {
      return await this.service.updatePrice({
        where: params,
        data: {
          ...data,

          tour: data.tour
            ? {
                connect: data.tour,
              }
            : undefined,
        },
        select: {
          amount: true,
          createdAt: true,
          date: true,
          id: true,
          quantity: true,

          tour: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Price })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePrice(
    @common.Param() params: PriceWhereUniqueInput
  ): Promise<Price | null> {
    try {
      return await this.service.deletePrice({
        where: params,
        select: {
          amount: true,
          createdAt: true,
          date: true,
          id: true,
          quantity: true,

          tour: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}