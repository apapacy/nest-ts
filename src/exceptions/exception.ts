
import { ExceptionFilter, Catch } from '@nestjs/common';
import { HttpException } from '@nestjs/core';

@Catch(Error)
export class ExceptionsFilter implements ExceptionFilter {
  catch(exception: Error, response) {
    console.log('********************************************')
    response.status(501).json({
      status: 501,
      message: 'Hi',
    });
  }
}
