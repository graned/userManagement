import UserInteractor from '../../interactors/UserInteractor';
import { IUserInBoundary } from '../../boundries/IUserInBoundary';
import GetUserById from './GetUserById';
import IUseCase from './IUseCase';

enum UseCaseNames {
  getUserById
};

class UserUseCases implements IUserInBoundary {
  private useCases: Map<UseCaseNames, IUseCase> = new Map();
  
  constructor(
    // private readonly requestModel: RequestModel,
    // private readonly responseModel: ResponseModel,
    private readonly userInteractor: UserInteractor,
  ) {
    // initializes use cases
    const getUserByIdUseCase = new GetUserById(userInteractor);
    this.useCases.set(UseCaseNames.getUserById, getUserByIdUseCase);
  }

  getUserById = async (id: number) => {
    try {
      // call request model here
      const useCase: IUseCase = this.useCases.get(UseCaseNames.getUserById);
      const userInstance = await useCase.execute(id);
      // call response model here
      return userInstance;
    } catch (error) {
      // log error here
      throw error;
    }
  }
}

export default UserUseCases;
