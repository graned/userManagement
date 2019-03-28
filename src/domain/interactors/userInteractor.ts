import IInteractor from "./IInteractor";
import User from "domain/entities/user";

class UserInteractor implements IInteractor<User>{
    constructor() {}

    createInstance = (data: any) => {
        return User.create(data);
    }

    findUserById = async (id: number) => {
        // call store to fetch raw data from DB
        return this.createInstance({ name: 'John', lastName: 'Rambo' });
    }
}

export default UserInteractor;
