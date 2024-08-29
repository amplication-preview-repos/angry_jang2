import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BoatServiceBase } from "./base/boat.service.base";

@Injectable()
export class BoatService extends BoatServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
