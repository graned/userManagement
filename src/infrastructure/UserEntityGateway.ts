import { IUserGateway } from '../domain/entities/gateways/IUserGateway';
import UserEntity from '../domain/entities/UserEntity';
import { Knex } from './db/Knex';
import * as knex from 'knex';
import { EntityGateway } from './EntityGateway';

const propertyMapper = {
    id: 'id',
    first_name: 'firstName',
    last_name: 'lastName',
    email: 'email',
    password: 'password',
};
export class UserEntityGateway extends EntityGateway implements IUserGateway {
    private knexClient: knex;
    
    constructor() {
        super(propertyMapper)
        this.knexClient = Knex.getClient();
    }

    async fetchUserById(id: number): Promise<UserEntity> {
        const rawData1 = await this.knexClient('users')
            .select()
            .where(this.mapToSource({ id }));

        return UserEntity.create(this.mapToDomain(rawData1.pop()));
    }
}
