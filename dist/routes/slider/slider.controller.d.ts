/// <reference types="multer" />
import { APIResponse } from 'src/models/response.model';
import { SliderService } from './slider.service';
export declare class SliderController {
    private readonly sliderService;
    constructor(sliderService: SliderService);
    getSliders(): Promise<APIResponse>;
    seeUploadedFile(Slider: any, res: any): any;
    uploadSlider(Slider: Express.Multer.File, text: string): Promise<APIResponse> | APIResponse;
    deleteSlider(id: number): Promise<APIResponse>;
}
