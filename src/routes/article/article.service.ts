import { Article } from './../../entities/article.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleService {

    constructor(
        @InjectRepository(Article) private articleRepo: Repository<Article>,
    ){}

    public getArticles(){
        return this.articleRepo.find();
    }

    public getArticleById(id: number){
        return this.articleRepo.findOne(id);
    }

    public getFeaturedArticles(){
        return this.articleRepo.find({where: {
            featured: true
        }})
    }

    public getRelatedArticles(categoryId: number){
        return this.articleRepo.find({
            where: {
                id_category: categoryId
            },
            take: 5,

        })
    }

    public createArticle(
        name: string, 
        code: string, 
        idDeparment: number,
        idCategory: number,
        description: string,
        featured: boolean,
        price: number
    ){
        return this.articleRepo.save({
            code: code,
            name: name,
            id_department: idDeparment,
            id_category: idCategory,
            description: description,
            featured: featured,
            price: price
        })
    }

    public updateArticle(
        id: number, 
        name: string, 
        code: string, 
        idDeparment: number,
        idCategory: number,
        description: string,
        featured: boolean,
        price: number,
        url: string
    ){
        return this.articleRepo.update(id, {
            code: code,
            name: name,
            id_department: idDeparment,
            id_category: idCategory,
            description: description,
            featured: featured,
            price: price,
            image_url: url
        })
    }

    public deleteArticle(id){
        return this.articleRepo.delete(id)
    }

}