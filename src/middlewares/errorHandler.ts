import { Response, Request, NextFunction } from 'express';

function errorHandler(
  error: Error,
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) {
  console.log('### Error handler');
  console.error(error);
  response.sendStatus(500);
}

export default errorHandler;
