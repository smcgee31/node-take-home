import knex from 'knex';

import config from './knexfile';

const client = knex(config);

export default client;
