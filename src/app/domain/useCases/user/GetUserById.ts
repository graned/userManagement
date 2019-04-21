import IUseCase from './IUseCase';
import UserInteractor from '../../interactors/UserInteractor';
import UserRequestModel from '../../models/UserRequestModel';
import UserResponseModel from '../../models/UserResponseModel';
import IUserOutBoundary from '../../boundries/IUserOutBoundary';

class GetUserById implements IUseCase {
  constructor(
    private readonly userInteractor: UserInteractor,
    private readonly userOutBoundary: IUserOutBoundary,
    ) {}

  execute = async (userRequestModel: UserRequestModel) => {
    try {      
      const userInstance = await this.userInteractor.getUserById(userRequestModel.id);
      const responseModel = new UserResponseModel(userInstance);
      
      return this.userOutBoundary.formatUserData(responseModel);
    } catch (error) {
      // TODO: Add logger
      throw error;
    }
  }
}

export default GetUserById;
