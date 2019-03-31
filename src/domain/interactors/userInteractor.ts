import IInteractor from "./IInteractor";
import User from "domain/entities/user";
import { EntityFactory, EntityType } from "../entities";

class UserInteractor implements IInteractor<User>{
    private entityFactory: EntityFactory;
    
    constructor(entityFactory: EntityFactory) {
        this.entityFactory = entityFactory;
    }

    createInstance(data: any): User {
        return this.entityFactory.createEntity(EntityType.User, data);
    }

    findUserById = async (id: number) => {
        // call store to fetch raw data from DB
        return this.createInstance({ id: 1, name: 'John', lastName: 'Rambo' });
    }
}

export default UserInteractor;
