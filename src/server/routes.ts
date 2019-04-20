import Domain from '../app';
import { factory } from  '../logger';
import UserControllers from '../app/presentation/controllers/UserControllers';
import UserPresenters from 'src/app/presentation/presenters/UserPresenters';

const logger = factory.getLogger('app.routes');

class Routes {
  private readonly userControllers: UserControllers;
  private readonly userPresenters: UserPresenters;

  constructor(private readonly domain: Domain) {
    const domainUseCases = domain.initDomain();
    const controllers = domain.initControllers(domainUseCases);
    const presenters = domain.initPresenters();

    this.userControllers = controllers.get(Domain.CONTROLLERS.user);
    this.userPresenters = presenters.get(Domain.PRESENTERS.user);
  }

  helloWelt = async (req, res, next) => {
    res.send('👋🏽🌎');
  }

  // the reason why i added the functions in this way, was in order to have the correct
  // 'this' context. https://blog.johnnyreilly.com/2014/04/typescript-instance-methods.html
  getUserById = async (req, res, next) => {
    logger.info('GET /user/:id');

    try {
      const { params: requestData } = req;
      logger.info(`Request.params: ${JSON.stringify(requestData)}`);

      const userInstance = await this.userControllers.getUserByIdHandler(requestData);
      const formattedResponse = this.userPresenters.formatUserData(userInstance);
      
      res.send(formattedResponse);
    } catch (error) {
      next(error);
    }
  }
  
  createUser = async (req, res, next) => {
    logger.info('POST /user');

    try {
      const { body } = req;
      logger.info(`Request.body: ${JSON.stringify(body)}`);

      const userInstance = await this.userControllers.createUserHandler(body);
      const formattedResponse = this.userPresenters.formatUserData(userInstance);
      
      res.send(formattedResponse);
    } catch (error) {
      next(error);
    }
  }

  errorHandler(error, req, res, next): void {
    const status = 500; // TODO: enhance this
    logger.error(`Error during API execution status[${status}]: ${error}`)
    res.status(status).json({ error });
  }
}

export default Routes;
