import * as graphql from "@nestjs/graphql";
import { BoatResolverBase } from "./base/boat.resolver.base";
import { Boat } from "./base/Boat";
import { BoatService } from "./boat.service";

@graphql.Resolver(() => Boat)
export class BoatResolver extends BoatResolverBase {
  constructor(protected readonly service: BoatService) {
    super(service);
  }
}
