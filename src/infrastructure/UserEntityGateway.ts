import { IUserGateway } from '../domain/entities/gateways/IUserGateway';
import UserEntity from '../domain/entities/UserEntity';

export class UserEntityGateway implements IUserGateway {
    // constructor(private readonly dbManager: GatewayManager) {

    // }

    async fetchUserById(id: number): Promise<UserEntity> {
        // HERE WE DO SOME DB PROCESS
        const rawData = {
            id: 1,
            name: 'John',
            lastName: 'Rambo',
            password: 'therealrambo123',
        };

        return UserEntity.create(rawData);
    }
}
