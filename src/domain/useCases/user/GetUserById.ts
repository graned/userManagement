import UserInteractor from '../../interactors/UserInteractor';
import IUseCase from './IUseCase';
import { IUserRequestModel } from '../../models/IUserRequestModel';

class GetUserById implements IUseCase {
  constructor(private readonly userInteractor: UserInteractor) {
  }

  execute = async (userRequestModel: IUserRequestModel) => {
    try {
      const userInstance = await this.userInteractor.getUserById(userRequestModel.id);
      return userInstance;
    } catch (error) {
      // log error here
      throw error;
    }
  }
}

export default GetUserById;
