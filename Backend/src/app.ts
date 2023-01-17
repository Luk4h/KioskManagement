import * as express from 'express';
import mongoose from 'mongoose';
import * as compression from 'compression';
import ErrorMiddleware from './utils/middlewares/errorMiddleware';
import KioskController from './controllers/kiosk/kiosk.controller';

class App {
  public express: express.Application;
  public port: number;

  constructor(port: number) {
    this.express = express();
    this.port = port;
    this.initialiseDbConnection();
    this.initialiseMiddleware();
    this.initialiseRoutes();
    this.initialiseErrorHandling();
  }

  private initialiseDbConnection() {
    const {MONGO_USER, MONGO_PASSWORD, MONGO_PATH} = process.env;
    mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`);
  }

  private initialiseMiddleware() {
    this.express.use(compression());
    this.express.use(express.json());

    //Cors middleware
    this.express.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      );
      next();
    });
  }

  private initialiseRoutes() {
    this.express.use('/api', new KioskController().router);
  }

  private initialiseErrorHandling() {
    this.express.use(ErrorMiddleware);
  }

  public listen() {
    this.express.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
