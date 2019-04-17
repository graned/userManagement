import Routes from './routes';
import App from './app';
import Domain from '../src';

const domain = new Domain();
const routes = new Routes(domain);
const app = new App(routes);

app.start();