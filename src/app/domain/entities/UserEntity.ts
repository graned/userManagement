class UserEntity {
    private _id: number;
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _password: string;

    private constructor(data:any) {
        this.id = data.id || null;
        this.firstName = data.firstName || null;
        this.lastName = data.lastName || null;
        this.email = data.email || null;
        this.password = data.password || null;
    }

    static create(data: any) {
        return new UserEntity(data);
    }

    // GETTERS AND SETTERS
    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }

    public get email(): string {
        return this._email;
    }

    public set email(value: string) {
        this._email = value;
    }

    public get password(): string {
        return this._password;
    }

    public set password(value: string) {
        this._password = value;
    }
}

export default UserEntity;
