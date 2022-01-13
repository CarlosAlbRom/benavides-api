import { APIResponse } from 'src/models/response.model';
import { CategoryService } from './category.service';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getCategories(): Promise<APIResponse>;
    getCategoryById(id: number): Promise<APIResponse>;
    createCategory(idDepartment: number, name: string, code: string): Promise<APIResponse>;
    updateCategory(id: number, idDepartment: number, name: string, code: string): Promise<APIResponse> | APIResponse;
    deleteCategory(id: number): Promise<APIResponse>;
}
