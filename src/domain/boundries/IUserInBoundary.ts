import UserEntity from '../entities/UserEntity';
import { IUserRequestModel } from '../models/IUserRequestModel';

export interface IUserInBoundary {
    getUserById(userRequestModel: IUserRequestModel): Promise<UserEntity>;
    // createUser(data: any): Promise<UserEntity>;
}