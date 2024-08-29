import * as graphql from "@nestjs/graphql";
import { TourResolverBase } from "./base/tour.resolver.base";
import { Tour } from "./base/Tour";
import { TourService } from "./tour.service";

@graphql.Resolver(() => Tour)
export class TourResolver extends TourResolverBase {
  constructor(protected readonly service: TourService) {
    super(service);
  }
}
