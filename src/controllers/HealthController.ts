import { Get, Route, Controller, Tags, SuccessResponse } from "tsoa";
import { Health } from "../models/Health";
import { HealthService } from "../services/HealthService";

@Tags("Health")
@Route("health")
export class HealthController extends Controller {
  @Get("/")
  @SuccessResponse(200, "OK")
  public async getHealth(): Promise<Health> {
    return new HealthService().get();
  }
}
