import IInteractor from "./IInteractor";
import User from "domain/entities/user";
import { EntityFactory, EntityType } from "../entities";
import UserStore from "../stores/userStore";

class UserInteractor implements IInteractor<User>{
    private entityFactory: EntityFactory;
    private userStore: UserStore;
    
    constructor(entityFactory: EntityFactory, userStore: UserStore) {
        this.entityFactory = entityFactory;
        this.userStore = userStore;
    }

    createInstance(data: any): User {
        return this.entityFactory.createEntity(EntityType.User, data);
    }

    findUserById = async (id: number) => {
        const rawUserData = await this.userStore.findById(id);
        return rawUserData == null ? {} : this.createInstance(rawUserData);
    }
}

export default UserInteractor;
