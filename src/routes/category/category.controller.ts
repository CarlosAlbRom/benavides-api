import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { APIResponse } from 'src/models/response.model';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {

    constructor(
        private readonly categoryService: CategoryService
    ){}

    @Get()
    public getCategories(): Promise<APIResponse>{
        return this.categoryService.getCategories().then((res) => {
            return new APIResponse().success(null, res);
        })
    }

    @Get(':id')
    public getCategoryById(
        @Param('id') id: number
    ){
        return this.categoryService.getCategoryById(id).then((res) => {
            if (res) {
                return new APIResponse().success("", res);
            } else {
                return new APIResponse().error("No category found")
            }
        })
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    public createCategory(
        @Body('id_department') idDepartment: number, 
        @Body('name') name: string, 
        @Body('code') code: string
    ): Promise<APIResponse>{
        return this.categoryService.createCategory(name, code, idDepartment).then((res) => {
            return new APIResponse().success("", res)
        }, (err) => {
            return new APIResponse().error(err.sqlMessage)
        })
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    public updateCategory(
        @Param('id') id: number,
        @Body('id_department') idDepartment: number, 
        @Body('name') name: string, 
        @Body('code') code: string
    ): Promise<APIResponse> | APIResponse{
        if (idDepartment && name && code) {
            return this.categoryService.updateCategory(id, name, code, idDepartment).then(() => {
                return this.getCategoryById(id)
            }, (err) => {
                return new APIResponse().error(err.sqlMessage);
            })
        } else {
            return new APIResponse().error("Bad Request");
        }
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    public deleteCategory(
        @Param('id') id: number
    ){
        return this.categoryService.deleteCategory(id).then(() => {
            return new APIResponse().success("Category succesfully deleted")
        }, (err) => {
            return new APIResponse().error(err.sqlMessage);
        })
    }

}