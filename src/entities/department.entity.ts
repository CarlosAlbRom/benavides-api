import { IsNumber, isNumber, IsString, MaxLength, MinLength } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Department extends BaseEntity{

    @PrimaryGeneratedColumn()
    @IsNumber()
    id_department: number;

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

}