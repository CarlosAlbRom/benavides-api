import { Image } from 'src/entities/image.entity';
import { Repository } from 'typeorm';
export declare class ImageService {
    private imageRepo;
    constructor(imageRepo: Repository<Image>);
    getImages(): Promise<Image[]>;
    getImageById(id: number): Promise<Image>;
    getMultipleImagesById(ids: number[]): Promise<Image[]>;
    createImage(title: string, url: string, articleId: number): Promise<{
        title: string;
        url: string;
        id_article: number;
    } & Image>;
    updateImage(id: number, title: string, url: string): Promise<import("typeorm").UpdateResult>;
    deleteImage(id: any): Promise<import("typeorm").DeleteResult>;
}
