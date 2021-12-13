import { JwtAuthGuard } from './../../guards/jwt.guard';
import { APIResponse } from 'src/models/response.model';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ColorService,  } from './color.service';

@Controller('color')
export class ColorController {

    constructor(
        private readonly colorService: ColorService,
    ) {}

    @Get()
    public getColors(): Promise<APIResponse>{
        return this.colorService.getColors().then(res => {
            return new APIResponse().success(null, res);
        })
    }

    @Get(':id')
    public getColorById(
        @Param('id') id: number
    ): Promise<APIResponse>{
        return this.colorService.getColorById(id).then((res) => {
            if (res) {
                return new APIResponse().success("", res);
            } else {
                return new APIResponse().error("No Color found")
            }
        })
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    public createColor(
        @Body('name') name: string, 
        @Body('code') code: string,
        @Body('hex') hex: string
    ): Promise<APIResponse>{
        return this.colorService.createColor(name, code, hex).then((res) => {
            return new APIResponse().success("", res)
        }, (err) => {
            return new APIResponse().success(err.sqlMessage)
        })
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    public updateColor(
        @Param('id') id: number,
        @Body('name') name: string, 
        @Body('code') code: string,
        @Body('hex') hex: string
    ){
        return this.colorService.updateColor(id, name, code, hex).then((res) => {
            return this.getColorById(id)
        }, (err) => {
            return new APIResponse().error(err.sqlMessage)
        })
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    public deleteColor(
        @Param('id') id: number
    ){
        return this.colorService.deleteColor(id).then(() => {
            return new APIResponse().success("Color succesfully deleted")
        }, (err) => {
            return new APIResponse().error(err.sqlMessage);
        })
    }

}