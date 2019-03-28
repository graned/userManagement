import IInteractor from "./IInteractor";

class UserInteractor implements IInteractor<any>{
    constructor() {}
    
    createInstance = (data: object) => {

    }

    findUserById = async (id: number) => {
        return { name: 'John', lastName: 'Rambo' };
    }
}

export default UserInteractor;
