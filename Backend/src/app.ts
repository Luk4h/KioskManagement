import * as express from 'express';
import mongoose from 'mongoose';
import * as compression from 'compression';
import ErrorMiddleware from './utils/middlewares/errorMiddleware';
import KioskController from './controllers/kiosk/kiosk.controller';
import KioskModel from './models/kiosk';

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
    this.initialiseStoreHandling();
  }

  private initialiseDbConnection() {
    const {MONGO_USER, MONGO_PASSWORD, MONGO_PATH} = process.env;
    mongoose.connect(
      `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_PATH}`
    );
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
      res.header('Access-Control-Allow-Methods', '*');
      next();
    });
  }

  private initialiseRoutes() {
    this.express.use('/api', new KioskController().router);
  }

  private initialiseErrorHandling() {
    this.express.use(ErrorMiddleware);
  }

  // Function to check if kiosk should be open.
  private initialiseStoreHandling() {
    setInterval(async () => {
      const kiosks = await KioskModel.find().exec();
      kiosks.forEach(async kiosk => {
        const Now = new Date().toLocaleTimeString('pt-br');
        const StoreOpensAt = new Date(kiosk.storeOpensAt).toLocaleTimeString('pt-br');
        const StoreClosesAt = new Date(kiosk.storeClosesAt).toLocaleTimeString('pt-br');
        if (kiosk.isKioskClosed) {
          if ( Now >= StoreOpensAt && Now <= StoreClosesAt ) {
            console.log(kiosk.id, ' deve estar aberto...')
            kiosk.isKioskClosed = false;
            await kiosk.save();
          }
        } else {
          if ( Now <= StoreOpensAt && Now >= StoreClosesAt ) {
            console.log(kiosk.id, ' deve estar fechado...')
            kiosk.isKioskClosed = true;
            await kiosk.save();
          }
        }
      });
    }, 10000);
  }

  public listen() {
    this.express.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
