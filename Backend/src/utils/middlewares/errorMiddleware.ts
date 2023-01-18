import {NextFunction, Request, Response} from 'express';
import HttpException from '../exceptions/exceptions';

function errorMiddleware(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  res.status(status).send({
    status: status,
    message: message,
  });
}

export default errorMiddleware;
