import { IsBoolean, isBoolean, isString, IsString } from 'class-validator';
import { MaxLength } from 'class-validator';
import { MinLength } from 'class-validator';
import { Column } from 'typeorm';
import { BaseEntity } from 'typeorm';
import { Entity } from 'typeorm';
import { Unique } from 'typeorm';
import { IsNumber } from 'class-validator';

import { PrimaryGeneratedColumn } from 'typeorm';
@Unique('article', [
    'name',
    'code'
])
@Entity()
export class Article extends BaseEntity{

    @PrimaryGeneratedColumn()
    @IsNumber()
    id_article: number;

    @Column({length: 45})
    @MinLength(1)
    @MaxLength(45)
    @IsString()
    name: string;

    @Column({length: 45})
    @MinLength(1)
    @MaxLength(45)
    @IsString()
    code: string;

    @Column({length: 255})
    @MinLength(1)
    @MaxLength(255)
    @IsString()
    image_url: string;

    @Column()
    @IsNumber()
    id_category: number;

    @Column()
    @IsNumber()
    id_department: number;

    @Column()
    @IsString()
    description: string;

    @Column()
    @IsNumber()
    price: number;

    @Column()
    @IsBoolean()
    featured: boolean;

}