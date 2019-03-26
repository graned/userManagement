import Routes from './routes';
import App from './app';

const routes = new Routes();
const app = new App(routes);

app.start();