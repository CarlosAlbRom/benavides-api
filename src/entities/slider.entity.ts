import { IsString } from 'class-validator';
import { MaxLength } from 'class-validator';
import { MinLength } from 'class-validator';
import { Column } from 'typeorm';
import { BaseEntity } from 'typeorm';
import { Entity } from 'typeorm';
import { Unique } from 'typeorm';
import { IsNumber } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

@Unique('slider', [
    'url'
])
@Entity()
export class Slider extends BaseEntity{

    @PrimaryGeneratedColumn()
    @IsNumber()
    id_slider: number;

    @Column({length: 255})
    @MinLength(1)
    @MaxLength(255)
    @IsString()
    url: string;

    @Column({length: 255})
    @MinLength(1)
    @MaxLength(255)
    @IsString()
    title: string;

    @Column()
    @IsNumber()
    order: number;

}