import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { APIResponse } from 'src/models/response.model';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {

    constructor(
        private readonly articleService: ArticleService
    ){}

    @Get()
    public getCategories(): Promise<APIResponse>{
        return this.articleService.getArticles().then((res) => {
            return new APIResponse().success(null, res);
        })
    }

    @Get(':id')
    public getArticleById(
        @Param('id') id: number
    ){
        return this.articleService.getArticleById(id).then((res) => {
            if (res) {
                return new APIResponse().success("", res);
            } else {
                return new APIResponse().error("No Article found")
            }
        })
    }

    @Get('featured')
    public getFeaturedArticles(): Promise<APIResponse>{
        return this.articleService.getFeaturedArticles().then((res) => {
            return new APIResponse().success(null, res)
        })
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    public createArticle(
        @Body('id_department') idDepartment: number, 
        @Body('name') name: string, 
        @Body('code') code: string,
        @Body('id_category') idCategory: number,
        @Body('description') description: string,
        @Body('featured') featured: boolean,
        @Body('price') price: number,
    ): Promise<APIResponse>{
        return this.articleService.createArticle(
            name, 
            code, 
            idDepartment,
            idCategory,
            description,
            featured,
            price
        ).then((res) => {
            return new APIResponse().success("", res)
        }, (err) => {
            return new APIResponse().error(err.sqlMessage)
        })
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    public updateArticle(
        @Param('id') id: number,
        @Body('id_department') idDepartment: number, 
        @Body('name') name: string, 
        @Body('code') code: string,
        @Body('id_category') idCategory: number,
        @Body('description') description: string,
        @Body('featured') featured: boolean,
        @Body('price') price: number,
        @Body('image_url') url: string
    ): Promise<APIResponse> | APIResponse{
        if (idDepartment && name && code) {
            return this.articleService.updateArticle(
                id, 
                name, 
                code, 
                idDepartment,
                idCategory,
                description,
                featured,
                price,
                url
            ).then(() => {
                return this.getArticleById(id)
            }, (err) => {
                return new APIResponse().error(err.sqlMessage);
            })
        } else {
            return new APIResponse().error("Bad Request");
        }
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    public deleteArticle(
        @Param('id') id: number
    ){
        return this.articleService.deleteArticle(id).then(() => {
            return new APIResponse().success("Article succesfully deleted")
        }, (err) => {
            return new APIResponse().error(err.sqlMessage);
        })
    }

}