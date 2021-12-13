import { Department } from './department.entity';
import { IsNumber, isNumber, IsString, MaxLength, MinLength } from "class-validator";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Unique('category', [
    'name',
    'code'
])
@Entity()
export class Category extends BaseEntity{

    @PrimaryGeneratedColumn()
    @IsNumber()
    id_category: number;

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

    @Column()
    @IsNumber()
    id_department: number;

    @ManyToOne(type => Department, department => department.id_department)
    @JoinColumn({name: 'id_department'})
    department: Department

}