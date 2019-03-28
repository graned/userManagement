// import User from "domain/entities/user";

interface IUseCase {
  execute(id: number): Promise<any>;
  //execute(id: number): Promise<User>;
}

export default IUseCase;