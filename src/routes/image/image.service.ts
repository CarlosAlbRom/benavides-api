import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Image } from 'src/entities/image.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImageService {

    constructor(
        @InjectRepository(Image) private imageRepo: Repository<Image>,
    ){}

    public getImages(){
        return this.imageRepo.find();
    }

    public getImageById(id: number){
        return this.imageRepo.findOne(id);
    }

    public getMultipleImagesById(ids: number[]){
        return this.imageRepo.findByIds(ids)
    }

    public createImage(title: string, url: string, articleId: number){
        return this.imageRepo.save({
            title: title,
            url: url,
            id_article: articleId
        })
    }

    public updateImage(id: number, title: string, url: string){
        return this.imageRepo.update(id, {
            title: title,
            url: url
        })
    }

    public deleteImage(id){
        return this.imageRepo.delete(id)
    }

}