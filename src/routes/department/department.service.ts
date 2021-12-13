import { APIResponse } from 'src/models/response.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from 'src/entities/department.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentService {

    constructor(
        @InjectRepository(Department) private departmentRepo: Repository<Department>,
    ){}

    /**
     * Function to get all departments
     * @returns {Department[]} Returns all departments
     */
    public getDepartments(){
        return this.departmentRepo.find()
    }

    public getDepartmentById(id: number){
        return this.departmentRepo.findOne(id);
    }

    public createDepartment(name: string, code: string){
        return this.departmentRepo.save({
            code: code,
            name: name,
        })
    }

    public updateDepartment(id: number, name: string, code: string){
        return this.departmentRepo.update(id, {
            name: name,
            code: code
        })
    }


}
