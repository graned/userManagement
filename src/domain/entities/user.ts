import IEntity from "./IEntity";

class User implements IEntity {
    id: number;
    name: string;
    lastName: string;

    private constructor(id: number, name: string, lastName: string) {
        this.id = id || null;
        this.name = name || null;
        this.lastName = lastName || null;
    }

    static create(data: any): User {
        const { id, name,  lastName } = data;
        return new User(id, name,  lastName);
    }
}

export default User;
