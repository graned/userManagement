import UserEntity from '../entities/UserEntity';

// not to be confused with http requests, this is a class ment to REQUEST the usage of our domain!
export class UserResponseModel {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;

    constructor(userEntity: UserEntity) {
        this.firstName = userEntity.firstName || null;
        this.lastName = userEntity.lastName || null;
        this.email = userEntity.email || null;
        this.password = userEntity.password || null;
    }
}
