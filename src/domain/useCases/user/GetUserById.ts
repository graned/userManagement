import UserInteractor from '../../interactors/UserInteractor';
import IUseCase from './IUseCase';

class GetUserById implements IUseCase {
  constructor(private readonly userInteractor: UserInteractor) {
  }

  execute = async (id: number) => {
    try {
      const userInstance = await this.userInteractor.getUserById(id);
      return userInstance;
    } catch (error) {
      // log error here
      throw error;
    }
  }
}

export default GetUserById;
