import { UserResponseModel } from '../models/UserResponseModel';

export interface IUserOutBoundary {
    formatUserData(userResponseModel: UserResponseModel): any;
}
