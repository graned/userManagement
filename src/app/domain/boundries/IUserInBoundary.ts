import UserRequestModel from '../models/UserRequestModel';

interface IUserInBoundary {
    getUserById(userRequestModel: UserRequestModel): Promise<UserRequestModel>;
    createUser(userRequestModel: UserRequestModel): Promise<UserRequestModel>;
}

export default IUserInBoundary;