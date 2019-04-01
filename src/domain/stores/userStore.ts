class UserStore {
    private storeManager: DataManager;
    
    constructor(storeManager) {
        this.storeManager = storeManager;
    }

    findById = async (id: number) => {
        const condition = { id };
        return this.find(condition);
    }

    find = async (condition: any) => {
        const foundData = await this.storeManager.find(condition);
        return foundData || null;
        
        // return { id: 1, name: 'John', lastName: 'Rambo' };
    }
}

export default UserStore;
