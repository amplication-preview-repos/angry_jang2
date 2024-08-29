import { Module } from "@nestjs/common";
import { TourModuleBase } from "./base/tour.module.base";
import { TourService } from "./tour.service";
import { TourController } from "./tour.controller";
import { TourResolver } from "./tour.resolver";

@Module({
  imports: [TourModuleBase],
  controllers: [TourController],
  providers: [TourService, TourResolver],
  exports: [TourService],
})
export class TourModule {}
