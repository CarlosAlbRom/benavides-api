import { APIResponse } from 'src/models/response.model';
import { DepartmentService } from './department.service';
export declare class DepartmentController {
    private readonly departmentService;
    constructor(departmentService: DepartmentService);
    getDepartments(): Promise<APIResponse>;
    getDepartmentById(id: number): Promise<APIResponse>;
    createDepartment(name: string, code: string): Promise<APIResponse>;
    updateDepartment(id: number, name: string, code: string): Promise<APIResponse>;
}
