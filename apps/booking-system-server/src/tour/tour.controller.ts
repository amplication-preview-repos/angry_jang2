import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TourService } from "./tour.service";
import { TourControllerBase } from "./base/tour.controller.base";

@swagger.ApiTags("tours")
@common.Controller("tours")
export class TourController extends TourControllerBase {
  constructor(protected readonly service: TourService) {
    super(service);
  }
}
