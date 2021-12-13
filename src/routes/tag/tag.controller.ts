import { JwtAuthGuard } from './../../guards/jwt.guard';
import { APIResponse } from 'src/models/response.model';
import { Body, Controller, Get, Param, Post, Put, UseGuards, Delete } from '@nestjs/common';
import { TagService,  } from './tag.service';

@Controller('tag')
export class TagController {

    constructor(
        private readonly tagService: TagService,
    ) {}

    @Get()
    public getTags(): Promise<APIResponse>{
        return this.tagService.getTags().then(res => {
            return new APIResponse().success(null, res);
        })
    }

    @Get(':id')
    public getTagById(
        @Param('id') id: number
    ): Promise<APIResponse>{
        return this.tagService.getTagById(id).then((res) => {
            if (res) {
                return new APIResponse().success("", res);
            } else {
                return new APIResponse().error("No Tag found")
            }
        })
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    public createTag(
        @Body('name') name: string, 
        @Body('code') code: string
    ): Promise<APIResponse>{
        return this.tagService.createTag(name, code).then((res) => {
            return new APIResponse().success("", res)
        }, (err) => {
            return new APIResponse().success(err.sqlMessage)
        })
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    public updateTag(
        @Param('id') id: number,
        @Body('name') name: string, 
        @Body('code') code: string
    ){
        return this.tagService.updateTag(id, name, code).then((res) => {
            return this.getTagById(id)
        }, (err) => {
            return new APIResponse().error(err.sqlMessage)
        })
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    public deleteTag(
        @Param('id') id: number
    ){
        return this.tagService.deleteTag(id).then(() => {
            return new APIResponse().success("Tag succesfully deleted")
        }, (err) => {
            return new APIResponse().error(err.sqlMessage);
        })
    }

}