import { Health } from "../models/Health";

export class HealthService {
  public get(): Health {
    return {
      healthy: true,
      hello: "world",
    };
  }
}
