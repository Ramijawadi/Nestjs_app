
import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Request, response, Response } from 'express';
import { BaseExceptionFilter } from '@nestjs/core';
import { MyLoggerService } from './my-logger/my-logger.service';
import { PrismaClientValidationError } from '@prisma/client/runtime/library';


type MyResponseObj = {
    statusCode : number ,
    timestamp : string,
    path:string,
    response : string| object
}


@Catch()

export class AllExceptionFiler extends BaseExceptionFilter{
 private readonly logger = new MyLoggerService(AllExceptionFiler.name)

 catch(exception : unknown ,host:ArgumentsHost){
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const myResponseObj: MyResponseObj = {

        statusCode:500,
        timestamp:new Date().toISOString(),
        path:request.url,
        response:'',
    }

    if(exception instanceof HttpException){
        myResponseObj.statusCode = exception.getStatus()
        myResponseObj.response = exception.getResponse()
    
    } else if (exception instanceof PrismaClientValidationError){

        myResponseObj.statusCode = 422 
        myResponseObj.response = exception.message.replaceAll(/\n/g, '')
    }
    else{
        myResponseObj.statusCode = HttpStatus.INTERNAL_SERVER_ERROR
        myResponseObj.response ='Internal Server Error'
    }
    response
     .status(myResponseObj.statusCode)
     .json(myResponseObj)

     this.logger.error(myResponseObj.response,AllExceptionFiler.name)
     super.catch(exception, host)
 }
}
// @Catch(HttpException)
// export class HttpExceptionFilter implements ExceptionFilter {
//   catch(exception: HttpException, host: ArgumentsHost) {
//     const ctx = host.switchToHttp();
//     const response = ctx.getResponse<Response>();
//     const request = ctx.getRequest<Request>();
//     const status = exception.getStatus();

//     response
//       .status(status)
//       .json({
//         statusCode: status,
//         timestamp: new Date().toISOString(),
//         path: request.url,
//       });
//   }
// }