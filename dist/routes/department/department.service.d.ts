import { Department } from 'src/entities/department.entity';
import { Repository } from 'typeorm';
export declare class DepartmentService {
    private departmentRepo;
    constructor(departmentRepo: Repository<Department>);
    getDepartments(): Promise<Department[]>;
    getDepartmentById(id: number): Promise<Department>;
    createDepartment(name: string, code: string): Promise<{
        code: string;
        name: string;
    } & Department>;
    updateDepartment(id: number, name: string, code: string): Promise<import("typeorm").UpdateResult>;
}
