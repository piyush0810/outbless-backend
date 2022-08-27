import { DataSource } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
// import { dbCredentials } from './config/dbCredentials';

export const config = new DataSource({
  host: 'ec2-54-159-175-38.compute-1.amazonaws.com',
  port: 5432,
  username: 'mvghvefwysryne',
  password: 'd2f9b998f2c10e991a22a848cea5ec7227672a97e3cbaba924c36b3949b324f0',
  database: 'di1cn0ipsrann',
  type: 'postgres',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: false,
  logging: true,
  migrations: ['dist/migrations/*.js'],
  ssl: {
    rejectUnauthorized: false,
  },
});
