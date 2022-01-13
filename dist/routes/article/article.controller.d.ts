import { APIResponse } from 'src/models/response.model';
import { ArticleService } from './article.service';
export declare class ArticleController {
    private readonly articleService;
    constructor(articleService: ArticleService);
    getCategories(): Promise<APIResponse>;
    getArticleById(id: number): Promise<APIResponse>;
    getFeaturedArticles(): Promise<APIResponse>;
    createArticle(idDepartment: number, name: string, code: string, idCategory: number, description: string, featured: boolean, price: number): Promise<APIResponse>;
    updateArticle(id: number, idDepartment: number, name: string, code: string, idCategory: number, description: string, featured: boolean, price: number, url: string): Promise<APIResponse> | APIResponse;
    deleteArticle(id: number): Promise<APIResponse>;
}
