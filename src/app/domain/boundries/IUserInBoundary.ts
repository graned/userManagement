import UserRequestModel from '../models/UserRequestModel';

interface IUserInBoundary {
    getUserById(userRequestModel: UserRequestModel): Promise<any>;
    createUser(userRequestModel: UserRequestModel): Promise<any>;
}

export default IUserInBoundary;