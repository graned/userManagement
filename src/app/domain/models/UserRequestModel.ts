// not to be confused with http requests, this is a class ment to REQUEST the usage of our domain!
class UserRequestModel {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;

    constructor(requestData: any) {
        this.id = requestData.id? parseInt(requestData.id, 10) : null;
        this.firstName = requestData.firstName || null;
        this.lastName = requestData.lastName || null;
        this.email = requestData.email || null;
        this.password = requestData.password || null;
    }
}

export default UserRequestModel;