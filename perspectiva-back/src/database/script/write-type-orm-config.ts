import * as dotenv from 'dotenv';
import * as fs from 'fs';
dotenv.config();

fs.writeFileSync(
  'src/database/config/datasource.ts',
  `import { DataSource } from 'typeorm';
const dataSource: DataSource = new DataSource({
  type: 'postgres',
  host: '${process.env.POSTGRES_HOST || 'localhost'}',
  port: ${parseInt(process.env.POSTGRES_PORT || '5432', 10)},
  username: '${process.env.POSTGRES_USER || 'postgres'}',
  password: '${process.env.POSTGRES_PASSWORD || 'postgres'}',
  database: '${process.env.POSTGRES_DATABASE || 'perspectiva_db'}',
  entities: ['**/*.entity{.ts,.js}'],
  migrations: ['src/database/migration/*.ts'],
  synchronize: ${process.env.MODE != 'DEV'},
  ssl: ${process.env.MODE != 'DEV'},
});
export default dataSource;
`,
);
