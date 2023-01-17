import {Router, Request, Response, NextFunction} from 'express';
import Controller from '../../utils/interfaces/controller';
import KioskModel from '../../models/kiosk';
import HttpException from '../../utils/exceptions/exceptions';

class PostController implements Controller {
  public path = '/kiosks';
  public router: Router = Router();

  constructor() {
    this.initialiseRoutes();
  }

  private initialiseRoutes() {
    this.router.post(`${this.path}`, this.create);
  }

  private create = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const {
        id,
        serialKey,
        description,
        isKioskClosed,
        storeOpensAt,
        storeClosesAt,
      } = request.body;

      const kiosk = await KioskModel.create({
        id,
        serialKey,
        description,
        isKioskClosed,
        storeOpensAt,
        storeClosesAt,
      });
      response.status(201).json({kiosk});
    } catch (error) {
      next(new HttpException(400, 'Cannot create post'));
    }
  };
}

export default PostController;
