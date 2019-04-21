import IUserEntityGateway from '../domain/entities/gateways/IUserEntityGateway';
import BaseEntityGateway from './BaseEntityGateway';
import UserEntity from '../domain/entities/UserEntity';

import { Knex } from './db/Knex';
import * as knex from 'knex';

const propertyMapper = {
    id: 'id',
    first_name: 'firstName',
    last_name: 'lastName',
    email: 'email',
    password: 'password',
};

class UserEntityGateway extends BaseEntityGateway implements IUserEntityGateway {
    private knexClient: knex;
    
    constructor() {
        super(propertyMapper)
        this.knexClient = Knex.getClient();
    }

    async fetchUserById(id: number): Promise<UserEntity> {
        if (id == null) return null;

        const rawData = await this.knexClient('users')
            .select()
            .where(this.mapToSource({ id }));

        return rawData.length ? UserEntity.create(this.mapToDomain(rawData.pop())): null;
    }

    async createUser(userEntityInstance: UserEntity): Promise<UserEntity> {
        const mappedData = this.mapToSource(userEntityInstance);
        
        const newUser = await this.knexClient('users')
            .insert({
                ...mappedData,
                password: this.knexClient.raw(`crypt('${mappedData['password']}', gen_salt('bf', 8))`),
            })
            .returning('*');
        
        return UserEntity.create(this.mapToDomain(newUser.pop()))
    }
}

export default UserEntityGateway;
