import { JwtAuthGuard } from './../../guards/jwt.guard';
import { APIResponse } from 'src/models/response.model';
import { Body, Controller, Get, Param, Post, Put, UseGuards, Delete } from '@nestjs/common';
import { PresentationService,  } from './presentation.service';

@Controller('presentation')
export class PresentationController {

    constructor(
        private readonly presentationService: PresentationService,
    ) {}

    @Get()
    public getPresentations(): Promise<APIResponse>{
        return this.presentationService.getPresentations().then(res => {
            return new APIResponse().success(null, res);
        })
    }

    @Get(':id')
    public getPresentationById(
        @Param('id') id: number
    ): Promise<APIResponse>{
        return this.presentationService.getPresentationById(id).then((res) => {
            if (res) {
                return new APIResponse().success("", res);
            } else {
                return new APIResponse().error("No presentation found")
            }
        })
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    public createPresentation(
        @Body('name') name: string, 
        @Body('code') code: string
    ): Promise<APIResponse>{
        return this.presentationService.createPresentation(name, code).then((res) => {
            return new APIResponse().success("", res)
        }, (err) => {
            return new APIResponse().success(err.sqlMessage)
        })
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    public updatePresentation(
        @Param('id') id: number,
        @Body('name') name: string, 
        @Body('code') code: string
    ){
        return this.presentationService.updatePresentation(id, name, code).then((res) => {
            return this.getPresentationById(id)
        }, (err) => {
            return new APIResponse().error(err.sqlMessage)
        })
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    public deletePresentation(
        @Param('id') id: number
    ){
        return this.presentationService.deletePresentation(id).then(() => {
            return new APIResponse().success("presentation succesfully deleted")
        }, (err) => {
            return new APIResponse().error(err.sqlMessage);
        })
    }

}