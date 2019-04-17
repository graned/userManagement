import Domain from '../src';
import { UserControllers } from '../src/presentation/controllers/UserControllers';

class Routes {
  private readonly domainControllers = new Map();

  constructor(private readonly domain: Domain) {
    const domainUseCases = domain.initDomain();
    this.domainControllers = domain.initControllers(domainUseCases);
  }

  helloWelt = async (req, res, next) => {
    res.send('👋🏽🌎');
  }

  // the reason why i added the functions in this way, was in order to have the correct
  // 'this' context. https://blog.johnnyreilly.com/2014/04/typescript-instance-methods.html
  getUserById = async (req, res, next) => {
    const userControllers: UserControllers = this.domainControllers.get(Domain.Controllers.user);
    const result = await userControllers.getUserById(req);
    res.send(result);
  }

  errorHandler(error, req, res, next): void {
    const status = 500; // TODO: enhance this
    console.log(`Error during API execution status[${status}]: ${error}`)
    res.status(status).json({ error });
  }
}

export default Routes;
