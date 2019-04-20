import UserUseCases from './domain/useCases/user';
import UserInteractor from './domain/interactors/UserInteractor';

import UserEntityGateway from './infrastructure/UserEntityGateway';
import UserControllers from './presentation/controllers/userControllers';
import IUserInBoundary from './domain/boundries/IUserInBoundary';
import UserPresenters from './presentation/presenters/UserPresenters';

enum UseCases {
    user,
};

enum Controllers {
    user,
};

enum Presenters {
    user,
};

class Domain {  
    private useCases: Map<UseCases, IUserInBoundary> = new Map();
    private controllers: Map<Controllers, any> = new Map();
    private presenters: Map<Presenters, any> = new Map();

    static readonly UseCases = UseCases;
    static readonly CONTROLLERS = Controllers;
    static readonly PRESENTERS = Presenters;

    initDomain(): Map<UseCases, IUserInBoundary> {
        const userGateway = new UserEntityGateway();
        const userInteractor = new UserInteractor(userGateway); 
        const userUseCases = new UserUseCases(userInteractor);
        this.useCases.set(UseCases.user, userUseCases);
        
        return this.useCases;
    }

    // This are the controllers to be used by the API
    initControllers(useCases: Map<UseCases, IUserInBoundary>): Map<Controllers, any> {
        const userControllers = new UserControllers(useCases.get(UseCases.user));
        this.controllers.set(Controllers.user, userControllers);
        return this.controllers;
    }

    initPresenters(): Map<Presenters, any> {
        const userPresenters = new UserPresenters();
        this.presenters.set(Presenters.user, userPresenters);
        return this.presenters;
    }
}

export default Domain;