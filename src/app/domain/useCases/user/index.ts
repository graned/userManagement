import IUseCase from './IUseCase';

import UserInteractor from '../../interactors/UserInteractor';
import IUserInBoundary from '../../boundries/IUserInBoundary';

import UserRequestModel from '../../models/UserRequestModel';
import UserResponseModel from '../../models/UserResponseModel';
import IUserOutBoundary from '../../boundries/IUserOutBoundary';

import GetUserById from './GetUserById';
import CreateUser from './CreateUser';

enum UseCaseNames {
  getUserById,
  createUser,
};

class UserUseCases implements IUserInBoundary {
  private useCases: Map<UseCaseNames, IUseCase> = new Map();
  
  constructor(
    private readonly userOutBoundary: IUserOutBoundary,
    private readonly userInteractor: UserInteractor,
  ) {
    // initializes use cases
    const getUserByIdUseCase = new GetUserById(this.userInteractor);
    const createUserUseCase = new CreateUser(this.userInteractor);

    this.useCases.set(UseCaseNames.getUserById, getUserByIdUseCase);
    this.useCases.set(UseCaseNames.createUser, createUserUseCase);
  }

  private determineUseCase = (useCaseName: UseCaseNames) => async (userRequestModel: UserRequestModel) => {
    try {
      const useCase: IUseCase = this.useCases.get(useCaseName);
      const userInstance = await useCase.execute(userRequestModel);
      
      const responseModel = new UserResponseModel(userInstance);
      return this.userOutBoundary.formatUserData(responseModel);
    } catch (error) {
      // TODO: add logging
      throw error;
    }
  }

  getUserById = this.determineUseCase(UseCaseNames.getUserById);
  createUser = this.determineUseCase(UseCaseNames.createUser);
}

export default UserUseCases;
