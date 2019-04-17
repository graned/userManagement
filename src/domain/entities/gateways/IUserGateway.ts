import UserEntity from "../UserEntity";

export interface IUserGateway {
    fetchUserById(id: number): Promise<UserEntity>;
}
