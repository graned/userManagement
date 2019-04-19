import UserInteractor from '../../interactors/UserInteractor';
import { IUserInBoundary } from '../../boundries/IUserInBoundary';
import GetUserById from './GetUserById';
import IUseCase from './IUseCase';
import { UserRequestModel } from '../../models/UserRequestModel';
import { UserResponseModel } from '../../models/UserResponseModel';
import CreateUser from './CreateUser';

enum UseCaseNames {
  getUserById,
  createUser,
};

class UserUseCases implements IUserInBoundary {
  private useCases: Map<UseCaseNames, IUseCase> = new Map();
  
  constructor(
    private readonly userInteractor: UserInteractor,
  ) {
    // initializes use cases
    // shall this be moved into the init domain??
    const getUserByIdUseCase = new GetUserById(userInteractor);
    const createUserUseCase = new CreateUser(userInteractor);

    this.useCases.set(UseCaseNames.getUserById, getUserByIdUseCase);
    this.useCases.set(UseCaseNames.createUser, createUserUseCase);
  }

  private determineUseCase = (useCaseName: UseCaseNames) => async (userRequestModel: UserRequestModel) => {
    try {
      const useCase: IUseCase = this.useCases.get(useCaseName);
      const userInstance = await useCase.execute(userRequestModel);
      
      return new UserResponseModel(userInstance);
    } catch (error) {
      // TODO: add logging
      throw error;
    }
  }

  
  // NOTE: This logic can be extracted
  getUserById = this.determineUseCase(UseCaseNames.getUserById);
  createUser = this.determineUseCase(UseCaseNames.createUser);
}

export default UserUseCases;
