import { Get, Route, Controller } from "tsoa";
import { Health } from "./health";
import { HealthService } from "./healthService";

@Route("health")
export class HealthController extends Controller {
  @Get()
  public async getHealth(): Promise<Health> {
    return new HealthService().get();
  }
}
