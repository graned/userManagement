import UserResponseModel from '../models/UserResponseModel';

interface IUserOutBoundary {
    formatUserData(userResponseModel: UserResponseModel): any;
}

export default IUserOutBoundary;
