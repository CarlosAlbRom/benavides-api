/// <reference types="multer" />
import { APIResponse } from 'src/models/response.model';
import { ImageService } from './image.service';
export declare class ImageController {
    private readonly imageService;
    constructor(imageService: ImageService);
    getImages(): Promise<APIResponse>;
    seeUploadedFile(image: any, res: any): any;
    uploadImage(image: Express.Multer.File, text: string): Promise<APIResponse> | APIResponse;
    deleteImage(id: number): Promise<APIResponse>;
}
