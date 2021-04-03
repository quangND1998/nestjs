import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PageEntity{
    @PrimaryGeneratedColumn('increment') id: string;

    @CreateDateColumn() created: Date;
    @Column('text') name: string;
    // @Column('text') image: string;
    @Column('text') description: string;


}