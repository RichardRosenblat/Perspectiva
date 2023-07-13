import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApplicationHealthDto } from './dto/applicationHealth.dto';

@Injectable()
export class HealthService {
  constructor(private readonly configService: ConfigService) {}
  public healthCheck(): ApplicationHealthDto {
    const appHealth = new ApplicationHealthDto();

    appHealth.version = this.configService.get<string>('VERSION');
    appHealth.port = this.configService.get<number>('PORT');
    appHealth.databaseStatus = 'Not Implemented';
    appHealth.status = appHealth.databaseStatus === 'OK' ? 'OK' : 'ERROR';

    return appHealth;
  }
}
