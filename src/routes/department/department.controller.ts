import { JwtAuthGuard } from './../../guards/jwt.guard';
import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { APIResponse } from 'src/models/response.model';
import { DepartmentService } from './department.service';

@Controller('department')
export class DepartmentController {

    constructor(
        private readonly departmentService: DepartmentService
    ){}

    @Get()
    public getDepartments(): Promise<APIResponse>{
        return this.departmentService.getDepartments().then(res => {
            return new APIResponse().success(null, res);
        })
    }

    @Get(':id')
    public getDepartmentById(
        @Param('id') id: number
    ): Promise<APIResponse>{
        return this.departmentService.getDepartmentById(id).then((res) => {
            if (res) {
                return new APIResponse().success("", res);
            } else {
                return new APIResponse().error("No department found")
            }
        })
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    public createDepartment(
        @Body('name') name: string, 
        @Body('code') code: string
    ): Promise<APIResponse>{
        return this.departmentService.createDepartment(name, code).then((res) => {
            return new APIResponse().success("", res)
        }, (err) => {
            return new APIResponse().success(err.sqlMessage)
        })
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    public updateDepartment(
        @Param('id') id: number,
        @Body('name') name: string, 
        @Body('code') code: string
    ){
        return this.departmentService.updateDepartment(id, name, code).then((res) => {
            return this.getDepartmentById(id)
        }, (err) => {
            return new APIResponse().error(err.sqlMessage)
        })
    }
}
 