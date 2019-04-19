import UserInteractor from '../../interactors/UserInteractor';
import { IUserInBoundary } from '../../boundries/IUserInBoundary';
import GetUserById from './GetUserById';
import IUseCase from './IUseCase';
import { UserRequestModel } from '../../models/UserRequestModel';
import { UserResponseModel } from '../../models/UserResponseModel';

enum UseCaseNames {
  getUserById
};

class UserUseCases implements IUserInBoundary {
  private useCases: Map<UseCaseNames, IUseCase> = new Map();
  
  constructor(
    private readonly userInteractor: UserInteractor,
  ) {
    // initializes use cases
    const getUserByIdUseCase = new GetUserById(userInteractor);
    this.useCases.set(UseCaseNames.getUserById, getUserByIdUseCase);
  }

  private determineUseCase = (useCaseName: UseCaseNames) => async (userRequestModel: UserRequestModel) => {
    try {      
      const useCase: IUseCase = this.useCases.get(useCaseName);
      const userInstance = await useCase.execute(userRequestModel);
      return new UserResponseModel(userInstance);
    } catch (error) {
      // log error here
      throw error;
    }
  }

  
  // NOTE: This logic can be extracted
  getUserById = this.determineUseCase(UseCaseNames.getUserById);
}

export default UserUseCases;
