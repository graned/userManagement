import UserEntity from '../entities/UserEntity';

export interface IUserInBoundary {
    getUserById(id: number): Promise<UserEntity>;
    // createUser(data: any): Promise<UserEntity>;
}