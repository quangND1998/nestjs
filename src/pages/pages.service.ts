import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PageDTO } from './page.dto';
import { PageEntity } from './pages.entity';

@Injectable()
export class PagesService {

    constructor(@InjectRepository(PageEntity) private pageRepository: Repository<PageEntity>) {
        
        
    }
    async showAll() {
        
       return  await this.pageRepository.find();
    }
    async create(data:PageDTO) {
        const page = await this.pageRepository.create(data);
        await this.pageRepository.save(page);
        return page;
    }

    async read(id) {
       
        const page = await this.pageRepository.findOne({ where: { id } });
        if (!page ) {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }
        return page;
    }

    async update(id, data: Partial<PageDTO>) {
         const page = await this.pageRepository.findOne({ where: { id } });
        if (!page ) {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }
        await this.pageRepository.update({ id }, data);
        return await this.pageRepository.findOne({ id });
    }
    async destroy(id) {
          const page = await this.pageRepository.findOne({ where: { id } });
        if (!page ) {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }
        await this.pageRepository.delete({ id });
        return page;
    }





}
