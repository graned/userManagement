import IEntity from "./IEntity";

class User implements IEntity {
    id: number;
    name: string;
    lastName: string;

    private constructor(id: number, name: string, lastName: string) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
    }

    static create(data: any): User {
        const { id, name,  lastName } = data;
        return new User(id, name,  lastName);
    }
}

export default User;
