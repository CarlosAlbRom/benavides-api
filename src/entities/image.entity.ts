import { IsString } from 'class-validator';
import { MaxLength } from 'class-validator';
import { MinLength } from 'class-validator';
import { Column } from 'typeorm';
import { BaseEntity } from 'typeorm';
import { Entity } from 'typeorm';
import { Unique } from 'typeorm';
import { IsNumber } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

@Unique('image', [
    'url'
])
@Entity()
export class Image extends BaseEntity{

    @PrimaryGeneratedColumn()
    @IsNumber()
    id_image: number;

    @Column({length: 255})
    @MinLength(1)
    @MaxLength(255)
    @IsString()
    url: string;

    @Column({length: 45})
    @MinLength(1)
    @MaxLength(45)
    @IsString()
    title: string;

    @Column()
    @IsNumber()
    id_article: number;

    // @ManyToOne(type => Department, department => department.id_department)
    // @JoinColumn({name: 'id_department'})
    // department: Department

}