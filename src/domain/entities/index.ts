import IEntity from "./IEntity";
import User from "./user";

export enum EntityType {
    User = 'User'
}

export class EntityFactory {
    createEntity(type: EntityType, data: Object);

    public createEntity(entityType, entityData): IEntity {
        switch(entityType) {
            case 'User':
                return User.create(entityData);
        }
    }
}