import IUseCase from './IUseCase';

class GetUser implements IUseCase {
  constructor(/* interactor definitions */) {
  }

  async execute(id: number): Promise<any>{
    return Promise.resolve({ name: 'John', lastName: 'Rambo' });
  }
}

export default GetUser;
