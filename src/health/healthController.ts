import { Get, Route } from "tsoa";
import { Health } from "./health";
import { HealthService } from "./healthService";

@Route("health")
export class HealthController {
  @Get()
  public async getHealth(): Promise<Health> {
    return new HealthService().get();
  }
}
