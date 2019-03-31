import IUseCase from './IUseCase';
import UserInteractor from '../interactors/userInteractor';

class GetUser implements IUseCase {
  private userInteractor: UserInteractor;
  
  constructor(userInteractor: UserInteractor) {
    this.userInteractor = userInteractor;
  }

  execute = async (id: number) => {
    try {
      const userInstance = await this.userInteractor.findUserById(id);
      return userInstance;
    } catch (error) {
      // log error here
      throw error;
    }
  }
}

export default GetUser;
