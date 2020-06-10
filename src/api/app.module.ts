import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { Configuration } from './config/config.key';
import { ConfigService } from './config/config.service';
import { DatabaseModule } from './database/database.module';


@Module({
  imports: [ConfigModule, DatabaseModule]
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configServices: ConfigService) {
    AppModule.port = this._configServices.get(Configuration.PORT)
  }

}
