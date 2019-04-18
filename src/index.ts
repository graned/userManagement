import UserUseCases from './domain/useCases/user';
import UserInteractor from './domain/interactors/UserInteractor';
import { UserEntityGateway } from './infrastructure/UserEntityGateway';
import { IControllers } from './presentation/controllers/IControllers';
import { IUserInBoundary } from './domain/boundries/IUserInBoundary';
import { UserControllers } from './presentation/controllers/userControllers';

enum UseCases {
    user,
};

enum Controllers {
    user,
};

class Domain {  
    private useCases: Map<UseCases, IUserInBoundary> = new Map();
    private controllers: Map<Controllers, IControllers> = new Map();
    static readonly UseCases = UseCases;
    static readonly Controllers = Controllers;

    initDomain(): Map<UseCases, IUserInBoundary> {
        // declare GatewayManager
        // const userGatewayManager = new UserGatewayManager();
        const userGateway = new UserEntityGateway(/* gatewayManager */);
        const userInteractor = new UserInteractor(userGateway); 
        const userUseCases = new UserUseCases(userInteractor);
        this.useCases.set(UseCases.user, userUseCases);
        
        return this.useCases;
    }

    // This are the controllers to be used by the API
    initControllers(useCases: Map<UseCases, IUserInBoundary>): Map<Controllers, IControllers> {
        const userControllers = new UserControllers(useCases.get(UseCases.user));
        this.controllers.set(Controllers.user, userControllers);
        return this.controllers;
    }
}

export default Domain;