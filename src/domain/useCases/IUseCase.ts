interface IUseCase {
  execute(id: number): Promise<any>;
  // execute(): Promise<User>;
}

export default IUseCase;