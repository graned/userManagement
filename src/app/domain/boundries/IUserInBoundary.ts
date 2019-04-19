import { UserRequestModel } from '../models/UserRequestModel';

export interface IUserInBoundary {
    getUserById(userRequestModel: UserRequestModel): Promise<UserRequestModel>;
    createUser(userRequestModel: UserRequestModel): Promise<UserRequestModel>;
}