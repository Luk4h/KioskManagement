import App from './app';
// eslint-disable-next-line node/no-unpublished-import
import * as dotenv from 'dotenv';

dotenv.config();
// TODO: Validade .env file

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

const app = new App(port);

app.listen();
