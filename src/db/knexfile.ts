import { Config } from 'knex';

import * as settings from '../config/settings';

const config: Config = {
  client: 'pg',
  connection: {
    host: settings.POSTGRES_HOST,
    database: settings.POSTGRES_DATABASE,
    user: settings.POSTGRES_USERNAME,
    password: settings.POSTGRES_PASSWORD,
  },
  pool: {
    min: 1,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './migrations',
  },
  seeds: {
    directory: './seeds',
  },
};

export default config;
