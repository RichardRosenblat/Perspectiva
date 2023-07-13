import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { registerAs } from '@nestjs/config';

export default registerAs(
  'database',
  () =>
    <TypeOrmModuleOptions>{
      type: 'postgres',

      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,

      entities: ['**/*.entity{.ts,.js}'],

      migrationsTableName: 'migration',

      migrations: ['src/database/migration/*.ts'],

      cli: {
        migrationsDir: 'src/database/migration',
      },

      synchronize: process.env.MODE != 'DEV',

      ssl: process.env.MODE != 'DEV',
    },
);
