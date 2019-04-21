import IUseCase from './IUseCase';
import UserInteractor from '../../interactors/UserInteractor';
import UserRequestModel from '../../models/UserRequestModel';
import UserResponseModel from '../../models/UserResponseModel';
import IUserOutBoundary from '../../boundries/IUserOutBoundary';

class CreateUser implements IUseCase {
  constructor(
    private readonly userInteractor: UserInteractor, 
    private readonly userOutBoundary: IUserOutBoundary
  ) {}

  execute = async (userRequestModel: UserRequestModel) => {
    try {
      const userInstance = this.userInteractor.createInstance(userRequestModel);
      const createdUser = await this.userInteractor.createUser(userInstance);
      
      const responseModel = new UserResponseModel(createdUser);
      return this.userOutBoundary.formatUserData(responseModel);
    } catch (error) {
      console.log('> error during create user', error);
      throw error;
    }
  }
}

export default CreateUser;
