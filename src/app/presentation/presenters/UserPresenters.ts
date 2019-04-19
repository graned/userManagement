import { IUserOutBoundary } from '../../domain/boundries/IUserOutBoundary';
import { UserResponseModel } from 'src/app/domain/models/UserResponseModel';

/*
This bad boy is in charge to format the data that comes from the business domain
into something that our view model understands
*/
export class UserPresenters implements IUserOutBoundary {
    formatUserData(userResponseModel: UserResponseModel): any {
        // TODO: hide password and partially hide the email ;)
        return userResponseModel;
    }
}

