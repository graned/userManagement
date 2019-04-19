import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as config from 'config';
import Routes from './routes';

class App {
    app: express.Application;
    PORT: number;
    HOST: string;
    routes: Routes;

    constructor(routes: Routes) {
        this.app = express();
        this.routes = routes;
        this.HOST = config.get('host') || 'localhost';
        this.PORT = config.get('port') || 3000;
    }

    private registerRoutes(): void {
      this.app.get('/', this.routes.helloWelt);
      this.app.get('/user/:id', this.routes.getUserById);
      this.app.post('/user', this.routes.createUser);

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
