import UserEntity from '../entities/UserEntity';

// not to be confused with http requests, this is a class ment to RESPOND the results from domain!
class UserResponseModel {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;

    constructor(userEntity: UserEntity) {
        this.id = userEntity.id || null;
        this.firstName = userEntity.firstName || null;
        this.lastName = userEntity.lastName || null;
        this.email = userEntity.email || null;
        this.password = userEntity.password || null;
    }
}

export default UserResponseModel;
