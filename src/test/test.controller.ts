import { Controller,Get, Req,Param} from '@nestjs/common';
import { Request } from 'express';
import { Test } from './test.interface';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
    constructor(private readonly testService: TestService) {}
    @Get(':id')
    findAll(@Req() request: Request, @Param() params) {
        return this.testService.findAll()
        // console.log(params.id);
        // return `This action returns a #${params.id} cat`;
    }
}
