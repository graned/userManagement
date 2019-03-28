import IUseCase from './useCases/IUseCase';
import GetUserById from './useCases/getUserById';
import UserInteractor from './interactors/userInteractor';

enum UseCaseNames{
  getUserByIdUseCase
}

class Domain {
  private useCases: Map<UseCaseNames, IUseCase> = new Map();
  static readonly UseCaseNames = UseCaseNames;

  constructor() {
    this.init();
  }

  private init(): void {
    const userInteractor = new UserInteractor();
    const getUserByIdUseCase = new GetUserById(userInteractor);
    this.useCases.set(UseCaseNames.getUserByIdUseCase, getUserByIdUseCase);
  }

  getUseCase(useCaseName: UseCaseNames): IUseCase {
    return this.useCases.get(useCaseName);
  }

  getUseCases(): Map<UseCaseNames, IUseCase> {
    return this.useCases;
  }
}

export default Domain;
