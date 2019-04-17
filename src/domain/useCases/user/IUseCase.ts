// import User from "domain/entities/user";

interface IUseCase {
    execute(...args: any[]): Promise<any>;
    // execute(id: number): Promise<T>;
  }
  
  export default IUseCase;