import { IRequestModel } from './IRequestModel';

// not to be confused with http requests, this is a class ment to REQUEST the usage of our domain!
export interface IUserRequestModel extends IRequestModel {
    name?: string;
    email?: string;
    password?: string;
}
