import UserUseCases from './domain/useCases/user';
import UserInteractor from './domain/interactors/UserInteractor';

import UserEntityGateway from './infrastructure/UserEntityGateway';
import UserControllers from './presentation/controllers/userControllers';
import UserPresenters from './presentation/presenters/UserPresenters';

enum CONTROLLERS {
    user,
};

class Domain {  
    private _controllers: Map<CONTROLLERS, any> = new Map();

    static readonly CONTROLLERS = CONTROLLERS;

    constructor () {
        const userGateway = new UserEntityGateway();
        const userPresenters = new UserPresenters();
        const userInteractor = new UserInteractor(userGateway);
        const userUseCases = new UserUseCases(userPresenters, userInteractor);    
        const userControllers = new UserControllers(userUseCases);

        this.controllers.set(CONTROLLERS.user, userControllers);
    }


    public get controllers(): Map<CONTROLLERS, any> {
        return this._controllers;
    }

    public getUserControllers(): UserControllers {
        return this._controllers.get(CONTROLLERS.user);
    }
}

export default Domain;