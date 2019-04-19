import Domain from '../src';
import { UserControllers } from '../src/presentation/controllers/UserControllers';
import { UserPresenters } from 'src/presentation/presenters/UserPresenters';

class Routes {
  private readonly domainControllers = new Map();
  private readonly domainPresenters = new Map();

  constructor(private readonly domain: Domain) {
    const domainUseCases = domain.initDomain();
    this.domainControllers = domain.initControllers(domainUseCases);
    this.domainPresenters = domain.initPresenters();
  }

  helloWelt = async (req, res, next) => {
    res.send('👋🏽🌎');
  }

  // the reason why i added the functions in this way, was in order to have the correct
  // 'this' context. https://blog.johnnyreilly.com/2014/04/typescript-instance-methods.html
  getUserById = async (req, res, next) => {
    try {
      const userControllers: UserControllers = this.domainControllers.get(Domain.CONTROLLERS.user);
      const userPresenters: UserPresenters = this.domainPresenters.get(Domain.PRESENTERS.user);
      
      const { params: requestData } = req;
      const userInstance = await userControllers.getUserByIdHandler(requestData);
      const formattedResponse = userPresenters.formatUserData(userInstance);
      
      res.send(formattedResponse);
    } catch (error) {
      next(error);
    }
  }
  
  createUser = async (req, res, next) => {
    try {
      const userControllers: UserControllers = this.domainControllers.get(Domain.CONTROLLERS.user);
      const userPresenters: UserPresenters = this.domainPresenters.get(Domain.PRESENTERS.user);
      
      const { body } = req;
      const userInstance = await userControllers.createUserHandler(body);
      const formattedResponse = userPresenters.formatUserData(userInstance);
      
      res.send(formattedResponse);
    } catch (error) {
      next(error);
    }
  }

  errorHandler(error, req, res, next): void {
    const status = 500; // TODO: enhance this
    console.log(`Error during API execution status[${status}]: ${error}`)
    res.status(status).json({ error });
  }
}

export default Routes;
