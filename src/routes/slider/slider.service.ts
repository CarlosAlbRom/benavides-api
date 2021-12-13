import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Slider } from 'src/entities/slider.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SliderService {

    constructor(
        @InjectRepository(Slider) private sliderRepo: Repository<Slider>,
    ){}

    public getSliders(){
        return this.sliderRepo.find();
    }

    public getSliderById(id: number){
        return this.sliderRepo.findOne(id);
    }

    public getMultipleSlidersById(ids: number[]){
        return this.sliderRepo.findByIds(ids)
    }

    public createSlider(title: string, url: string, articleId: number){
        return this.sliderRepo.save({
            title: title,
            url: url,
            id_article: articleId
        })
    }

    public updateSlider(id: number, title: string, url: string){
        return this.sliderRepo.update(id, {
            title: title,
            url: url
        })
    }

    public deleteSlider(id){
        return this.sliderRepo.delete(id)
    }

}