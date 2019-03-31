interface IStore {
    // save(data:any): Promise<any>;
    // update(id: number): Promise<any>;
    // delete(id: number): Promise<any>;
    find(condition:any): Promise<any>;
}

export default IStore;
