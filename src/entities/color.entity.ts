import { IsString } from 'class-validator';
import { MaxLength } from 'class-validator';
import { MinLength } from 'class-validator';
import { Column } from 'typeorm';
import { BaseEntity } from 'typeorm';
import { Entity } from 'typeorm';
import { Unique } from 'typeorm';
import { IsNumber } from 'class-validator';

import { PrimaryGeneratedColumn } from 'typeorm';
@Unique('color', [
    'name',
    'code',
    'hex'
])
@Entity()
export class Color extends BaseEntity{

    @PrimaryGeneratedColumn()
    @IsNumber()
    id_color: number;

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

    @Column({length: 6})
    @MinLength(3)
    @MaxLength(6)
    @IsString()
    hex: string;

    @Column()
    @IsNumber()
    type: number

}