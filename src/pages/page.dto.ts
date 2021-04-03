import { IsString } from 'class-validator'
export class PageDTO {
    @IsString()
    name: string;

    @IsString()
    description: string;
    
}