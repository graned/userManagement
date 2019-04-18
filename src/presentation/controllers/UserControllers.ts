import { IUserInBoundary } from '../../domain/boundries/IUserInBoundary';
import { IControllers } from './IControllers';
import { IUserRequestModel } from '../../domain/models/IUserRequestModel';

/*
This bad boy is in charge of taking the requests from the server.
This files have a dependency to a request model and to a boundry interface
*/ 
export class UserControllers implements IControllers {
    constructor(
        private readonly userUseCases: IUserInBoundary,
        // private readonly requestModel: RequestModel,
    ) {}

    // the reason why i added the functions in this way, was in order to have the correct
    // 'this' context. https://blog.johnnyreilly.com/2014/04/typescript-instance-methods.html
    getUserByIdHandler = async (requestData: IUserRequestModel) => {
        // use request model to destructure the request if required
        const request = {
            id: requestData.id,
        };
        
        const user = await this.userUseCases.getUserById(request);
        return user;
    }
}
