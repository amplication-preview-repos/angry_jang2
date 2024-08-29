import { Module } from "@nestjs/common";
import { BoatModuleBase } from "./base/boat.module.base";
import { BoatService } from "./boat.service";
import { BoatController } from "./boat.controller";
import { BoatResolver } from "./boat.resolver";

@Module({
  imports: [BoatModuleBase],
  controllers: [BoatController],
  providers: [BoatService, BoatResolver],
  exports: [BoatService],
})
export class BoatModule {}
