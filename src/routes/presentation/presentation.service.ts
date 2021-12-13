import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Presentation } from 'src/entities/presentation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PresentationService {

    constructor(
        @InjectRepository(Presentation) private presentationRepo: Repository<Presentation>,
    ){}

    public getPresentations(){
        return this.presentationRepo.find();
    }

    public getPresentationById(id: number){
        return this.presentationRepo.findOne(id);
    }

    public getMultiplePresentationsById(ids: number[]){
        return this.presentationRepo.findByIds(ids)
    }

    public createPresentation(name: string, code: string){
        return this.presentationRepo.save({
            code: code,
            name: name,
        })
    }

    public updatePresentation(id: number, name: string, code: string){
        return this.presentationRepo.update(id, {
            name: name,
            code: code
        })
    }

    public deletePresentation(id){
        return this.presentationRepo.delete(id)
    }

}