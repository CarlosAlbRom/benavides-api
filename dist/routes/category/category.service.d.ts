import { Category } from './../../entities/category.entity';
import { Repository } from 'typeorm';
export declare class CategoryService {
    private categoryRepo;
    constructor(categoryRepo: Repository<Category>);
    getCategories(): Promise<Category[]>;
    getCategoryById(id: number): Promise<Category>;
    createCategory(name: string, code: string, idDeparment: number): Promise<{
        code: string;
        name: string;
        id_department: number;
    } & Category>;
    updateCategory(id: number, name: string, code: string, idDeparment: number): Promise<import("typeorm").UpdateResult>;
    deleteCategory(id: any): Promise<import("typeorm").DeleteResult>;
}
