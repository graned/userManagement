import * as knex from 'knex';

export class Knex {    
    static getClient(): knex {
        const config = {
            client: 'pg',
            connection: 'postgres://dios@localhost:5432/site',
        };

        return knex(config);
    }
}
