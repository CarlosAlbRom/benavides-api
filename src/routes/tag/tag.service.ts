import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Tag } from 'src/entities/tag.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TagService {

    constructor(
        @InjectRepository(Tag) private tagRepo: Repository<Tag>,
    ){}

    public getTags(){
        return this.tagRepo.find();
    }

    public getTagById(id: number){
        return this.tagRepo.findOne(id);
    }

    public getMultipleTagsById(ids: number[]){
        return this.tagRepo.findByIds(ids)
    }

    public createTag(name: string, code: string){
        return this.tagRepo.save({
            code: code,
            name: name,
        })
    }

    public updateTag(id: number, name: string, code: string){
        return this.tagRepo.update(id, {
            name: name,
            code: code
        })
    }

    public deleteTag(id){
        return this.tagRepo.delete(id)
    }

}