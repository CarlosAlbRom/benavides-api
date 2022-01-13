import { BaseEntity } from 'typeorm';
export declare class Image extends BaseEntity {
    id_image: number;
    url: string;
    title: string;
    id_article: number;
}
