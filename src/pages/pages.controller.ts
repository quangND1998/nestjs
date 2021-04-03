import { Body, Controller, Delete, Get, Logger, Param, Post, Put, UsePipes } from '@nestjs/common';
import { identity } from 'rxjs';
import { ValidationPipe } from 'src/shared/validation.pipe';
import { PageDTO } from './page.dto';
import { PagesService } from './pages.service';
@Controller('pages')
export class PagesController {
    private logger = new Logger('pageController');
    constructor(private pageService: PagesService) {
        
    }



    @Get()
    showAllPage() {
        return this.pageService.showAll();
    }
    @Post()
    @UsePipes(new ValidationPipe())
    createPage(@Body() data: PageDTO) {
        this.logger.log(JSON.stringify(data))
        return this.pageService.create(data);
        
    }
    @Get(':id')
    readPage(@Param('id') id: number) {
        return this.pageService.read(id);
        
    }
    @Put(':id')
    @UsePipes(new ValidationPipe())
    updatePage(@Param('id') id: number, @Body() data: Partial<PageDTO>) {
          this.logger.log(JSON.stringify(data))
        return this.pageService.update(id, data);
    }
    @Delete(':id')
    destroyPage(@Param('id') id: number) {
        return this.pageService.destroy(id);

        
    }


}
