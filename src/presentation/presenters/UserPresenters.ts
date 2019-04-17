import { IUserOutBoundary } from '../../domain/boundries/IUserOutBoundary';
import UserEntity from '../../domain/entities/UserEntity';

/*
This bad boy is in charge to format the data that comes from the business domain
into something that our view model understands
*/
export class Presenters implements IUserOutBoundary {
    formatUserData(data: UserEntity): any {
        return data;
    }
}

