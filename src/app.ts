import * as express from 'express';
import * as bodyParser from 'body-parser';
import Routes from 'routes';

class App {
    app: express.Application;
    PORT: number = 3000;
    HOST: string = 'localhost';
    routes: Routes;

    constructor(routes: Routes) {
        this.app = express();
        this.routes = routes;
    }

    private registerRoutes(): void {
      this.app.get('/', this.routes.helloWelt);
      this.app.use(this.routes.errorHandler);
    }

    start(): void {
      // support application/json type post data
      this.app.use(bodyParser.json());
      this.app.listen(this.PORT, this.HOST, () => {
        console.log(`Server started at ${this.HOST}:${this.PORT}`);
      });
      this.registerRoutes();
    }
}

export default App;
