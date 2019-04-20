import UserEntity from "../UserEntity";

interface IUserGateway {
    fetchUserById(id: number): Promise<UserEntity>;
    createUser(user: UserEntity): Promise<UserEntity>;
}

export default IUserGateway;