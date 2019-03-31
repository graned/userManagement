import Domain from './domain/domain';
class Routes {
  private domain: Domain;

  constructor(domain: Domain) {
    this.domain = domain;
  }

  helloWelt = async (req, res, next) => {
    res.send('👋🏽🌎');
  }

  // the reason why i added the functions in this way, was in order to have the correct
  // 'this' context. https://blog.johnnyreilly.com/2014/04/typescript-instance-methods.html
  getUserById = async (req, res, next) => {
    const { id } = req.params;

    const getUserByIdUseCase = this.domain.getUseCase(Domain.UseCaseNames.getUserByIdUseCase);
    const result = await getUserByIdUseCase.execute(id);
    res.send(result);
  }

  errorHandler(error, req, res, next): void {
    const status = 500; // TODO: enhance this
    console.log(`Error during API execution status[${status}]: ${error}`)
    res.status(status).json({ error });
  }
}

export default Routes;
