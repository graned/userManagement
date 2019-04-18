import IEntity from './IEntity';

class UserEntity implements IEntity {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;

    private constructor(data:any) {
        this.id = data.id || null;
        this.firstName = data.firstName || null;
        this.lastName = data.lastName || null;
        this.email = data.email || null;
        this.password = data.password || null;
    }

    static create(data: any): UserEntity {
        return new UserEntity(data);
    }
}

export default UserEntity;
