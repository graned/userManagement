import IEntity from './IEntity';

class UserEntity implements IEntity {
    id: number;
    name: string;
    lastName: string;
    password: string;

    private constructor(data:any) {
        this.id = data.id || null;
        this.name = data.name || null;
        this.lastName = data.lastName || null;
        this.password = data.password || null;
    }

    static create(data: any): UserEntity {
        return new UserEntity(data);
    }
}

export default UserEntity;
