import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';
import { ApplicationHealthDto } from './dto/applicationHealth.dto';

@Controller()
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  public healthCheck(): ApplicationHealthDto {
    return this.healthService.healthCheck();
  }
}
