import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BoatService } from "./boat.service";
import { BoatControllerBase } from "./base/boat.controller.base";

@swagger.ApiTags("boats")
@common.Controller("boats")
export class BoatController extends BoatControllerBase {
  constructor(protected readonly service: BoatService) {
    super(service);
  }
}
