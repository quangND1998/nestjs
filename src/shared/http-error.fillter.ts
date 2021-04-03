import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from '@nestjs/common'


@Catch()
export class HttpErrorFillter implements ExceptionFilter{
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest()
        const status = exception.getStatus();
        const errorRespone = {
            code: status,
            timestamp: new Date().toLocaleDateString(),
            path: request.url,
            methods: request.method,
            message: exception.message,


        }
        Logger.error(`${request.method} ${request.url}`,JSON.stringify(errorRespone),'ExceptionFillter');


        response.status(404).json(errorRespone)
        
    }
}