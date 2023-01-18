import {Router, Request, Response, NextFunction} from 'express';
import Controller from '../../utils/interfaces/controller';
import KioskModel from '../../models/kiosk';
import HttpException from '../../utils/exceptions/exceptions';
import dbExeption from '../../utils/interfaces/dbException';
import Kiosk from '../../utils/interfaces/kiosk';

class KioskController implements Controller {
  public path = '/kiosks';
  public router: Router = Router();

  constructor() {
    this.initialiseRoutes();
  }

  private initialiseRoutes() {
    this.router.get(`${this.path}`, this.query);
    this.router.post(`${this.path}`, this.create);
    this.router.put(`${this.path}`, this.edit);
    this.router.delete(`${this.path}`, this.delete);
  }

  private create = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const {id, serialKey, description, storeOpensAt, storeClosesAt}: Kiosk =
        request.body;
      if (
        !(
          id &&
          serialKey &&
          description &&
          Boolean(storeOpensAt) &&
          Boolean(storeClosesAt)
        )
      ) {
        next(new HttpException(400, 'Missing parameters'));
        return;
      }
      try {
        const kiosk = await KioskModel.create({
          id,
          serialKey,
          description,
          isKioskClosed: false,
          storeOpensAt,
          storeClosesAt,
        });
        response
          .status(201)
          .json({Message: 'Kiosk created successfully.', kiosk});
      } catch (error) {
        const dbError = error as dbExeption;
        console.log(error);
        if (dbError.code === 11000) {
          next(new HttpException(400, 'Kiosk already exists'));
        } else {
          next(new HttpException(400, 'Cannot create kiosk'));
        }
      }
    } catch (error) {
      next(new HttpException(400, 'Cannot create kiosk'));
    }
  };

  private query = async (
    _request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const kiosks = await KioskModel.find().exec();
      response.status(200).json({kiosks});
    } catch (error) {
      next(new HttpException(400, 'Cannot query kiosks'));
    }
  };

  private edit = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const {id, serialKey, description, storeOpensAt, storeClosesAt} =
        request.body;
      if (
        !(
          id &&
          serialKey &&
          description &&
          Boolean(storeOpensAt) &&
          Boolean(storeClosesAt)
        )
      ) {
        next(new HttpException(400, 'Missing parameters'));
        return;
      }

      const kiosk = await KioskModel.updateOne(
        {id: id},
        {
          serialKey,
          description,
          storeOpensAt,
          storeClosesAt,
        }
      );
      if (kiosk.modifiedCount === 0) {
        next(new HttpException(400, 'Kiosk not modified'));
      } else {
        response.status(201).json({Message: 'Kiosk modified'});
      }
    } catch (error) {
      next(new HttpException(400, 'Cannot edit kiosk'));
    }
  };

  private delete = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const {id} = request.body;
      const kiosk = await KioskModel.deleteOne({id: id});
      if (kiosk.deletedCount === 0) {
        next(new HttpException(400, 'Kiosk not deleted'));
      } else {
        response.status(201).json({Message: 'Kiosk deleted'});
      }
    } catch (error) {
      next(new HttpException(400, 'Cannot delete kiosk'));
    }
  };
}

export default KioskController;
