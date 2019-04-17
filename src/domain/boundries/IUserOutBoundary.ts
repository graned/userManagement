import UserEntity from '../entities/UserEntity';

export interface IUserOutBoundary {
    formatUserData(user: UserEntity): any;
}
