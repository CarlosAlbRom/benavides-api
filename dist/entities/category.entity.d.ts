import { Department } from './department.entity';
import { BaseEntity } from "typeorm";
export declare class Category extends BaseEntity {
    id_category: number;
    name: string;
    code: string;
    id_department: number;
    department: Department;
}
