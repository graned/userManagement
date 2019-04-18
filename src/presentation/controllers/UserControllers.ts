import { IUserInBoundary } from '../../domain/boundries/IUserInBoundary';
import { IControllers } from './IControllers';
import { UserRequestModel } from '../../domain/models/UserRequestModel';

/*
This bad boy is in charge of taking the requests from the server.
This files have a dependency to a request model and to a boundry interface
*/ 
export class UserControllers implements IControllers {
    constructor(
        private readonly userUseCases: IUserInBoundary,
    ) {}

    // the reason why i added the functions in this way, was in order to have the correct
    // 'this' context. https://blog.johnnyreilly.com/2014/04/typescript-instance-methods.html
    getUserByIdHandler = async (requestData: any) => {
        const requestModel = new UserRequestModel(requestData);
        
        const user = await this.userUseCases.getUserById(requestModel);
        return user;
    }
}
