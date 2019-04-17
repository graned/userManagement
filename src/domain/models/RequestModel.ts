import UserInteractor from '../interactors/UserInteractor';

export class RequestModel {
    constructor(private readonly userInteractor: UserInteractor) {}

    validateId(id: number) {
        // we can add some more complex validation logic on this level
        return id > 0;
    }
}
