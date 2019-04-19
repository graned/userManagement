import * as knex from 'knex';
import * as config from 'config';

export class Knex {    
    static getClient(): knex {
        const dbConfig = config.get('db');

        const opts = {
            client: 'pg',
            connection: dbConfig.url,
            pool: dbConfig.pool,
        };

        return knex(opts);
    }
}
