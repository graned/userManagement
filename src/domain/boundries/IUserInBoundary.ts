import { UserRequestModel } from '../models/UserRequestModel';

export interface IUserInBoundary {
    getUserById(userRequestModel: UserRequestModel): Promise<UserRequestModel>;
    // createUser(data: any): Promise<UserEntity>;
}