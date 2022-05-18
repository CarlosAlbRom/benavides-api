import { Article } from './../../entities/article.entity';
import { Repository } from 'typeorm';
export declare class ArticleService {
    private articleRepo;
    constructor(articleRepo: Repository<Article>);
    getArticles(): Promise<Article[]>;
    getArticleById(id: number): Promise<Article>;
    getFeaturedArticles(): Promise<Article[]>;
    getRelatedArticles(categoryId: number): Promise<Article[]>;
    createArticle(name: string, code: string, idDeparment: number, idCategory: number, description: string, featured: boolean, price: number): Promise<{
        code: string;
        name: string;
        id_department: number;
        id_category: number;
        description: string;
        featured: boolean;
        price: number;
    } & Article>;
    updateArticle(id: number, name: string, code: string, idDeparment: number, idCategory: number, description: string, featured: boolean, price: number, url: string): Promise<import("typeorm").UpdateResult>;
    deleteArticle(id: any): Promise<import("typeorm").DeleteResult>;
}
