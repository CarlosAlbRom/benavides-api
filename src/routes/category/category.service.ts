import { Category } from './../../entities/category.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {

    constructor(
        @InjectRepository(Category) private categoryRepo: Repository<Category>,
    ){}

    public getCategories(){
        return this.categoryRepo.find();
    }

    public getCategoryById(id: number){
        return this.categoryRepo.findOne(id);
    }

    public createCategory(name: string, code: string, idDeparment: number){
        return this.categoryRepo.save({
            code: code,
            name: name,
            id_department: idDeparment
        })
    }

    public updateCategory(id: number, name: string, code: string, idDeparment: number){
        return this.categoryRepo.update(id, {
            code: code,
            name: name,
            id_department: idDeparment
        })
    }

    public deleteCategory(id){
        return this.categoryRepo.delete(id)
    }

}