import UserInteractor from '../../interactors/UserInteractor';
import IUseCase from './IUseCase';
import { UserRequestModel } from '../../models/UserRequestModel';

class CreateUser implements IUseCase {
  constructor(private readonly userInteractor: UserInteractor) {
  }

  execute = async (userRequestModel: UserRequestModel) => {
    try {
      const userInstance = this.userInteractor.createInstance(userRequestModel);
      const createdUser = await this.userInteractor.createUser(userInstance);
      return createdUser;
    } catch (error) {
      console.log('> error during create user', error);
      throw error;
    }
  }
}

export default CreateUser;
