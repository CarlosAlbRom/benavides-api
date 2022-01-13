import { Slider } from 'src/entities/slider.entity';
import { Repository } from 'typeorm';
export declare class SliderService {
    private sliderRepo;
    constructor(sliderRepo: Repository<Slider>);
    getSliders(): Promise<Slider[]>;
    getSliderById(id: number): Promise<Slider>;
    getMultipleSlidersById(ids: number[]): Promise<Slider[]>;
    createSlider(title: string, url: string, articleId: number): Promise<{
        title: string;
        url: string;
        id_article: number;
    } & Slider>;
    updateSlider(id: number, title: string, url: string): Promise<import("typeorm").UpdateResult>;
    deleteSlider(id: any): Promise<import("typeorm").DeleteResult>;
}
