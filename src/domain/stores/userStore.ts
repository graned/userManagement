import IStore from "./IStore";

class UserStore implements IStore {
    // private storeManager: StoreManager;
    
    constructor(/*storeManager*/) {
        // this.storeManager = storeManager;
    }

    findById = async (id: number) => {
        const condition = { id };
        return this.find(condition);
    }

    find = async (condition: any) => {
        return { id: 1, name: 'John', lastName: 'Rambo' };
    }
}

export default UserStore;
