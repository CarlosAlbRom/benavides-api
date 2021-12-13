import { IsNumber, isNumber, IsString, MaxLength, MinLength } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    @IsNumber()
    id_user: number;

    @Column({length: 45})
    @MinLength(1)
    @MaxLength(45)
    @IsString()
    username: string;

    @Column({length: 45})
    @MinLength(1)
    @MaxLength(45)
    @IsString()
    last_name: string;

    @Column({length: 45})
    @MinLength(1)
    @MaxLength(45)
    @IsString()
    name: string;

    @Column()
    @MinLength(1)
    @MaxLength(45)
    @IsString()
    password: string;

    @Column()
    @MinLength(1)
    @MaxLength(45)
    @IsString()
    email: string

}