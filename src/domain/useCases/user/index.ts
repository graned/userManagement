import UserInteractor from '../../interactors/UserInteractor';
import { IUserInBoundary } from '../../boundries/IUserInBoundary';
import GetUserById from './GetUserById';
import IUseCase from './IUseCase';
import { IUserRequestModel } from 'src/domain/models/IUserRequestModel';

enum UseCaseNames {
  getUserById
};

class UserUseCases implements IUserInBoundary {
  private useCases: Map<UseCaseNames, IUseCase> = new Map();
  
  constructor(
    // private readonly responseModel: ResponseModel,
    private readonly userInteractor: UserInteractor,
  ) {
    // initializes use cases
    const getUserByIdUseCase = new GetUserById(userInteractor);
    this.useCases.set(UseCaseNames.getUserById, getUserByIdUseCase);
  }

  getUserById = async (userRequestModel: IUserRequestModel) => {
    try {
      // call request model here
      const useCase: IUseCase = this.useCases.get(UseCaseNames.getUserById);
      const userInstance = await useCase.execute(userRequestModel);
      // call response model here
      return userInstance;
    } catch (error) {
      // log error here
      throw error;
    }
  }
}

export default UserUseCases;
