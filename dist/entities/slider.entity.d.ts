import { BaseEntity } from 'typeorm';
export declare class Slider extends BaseEntity {
    id_slider: number;
    url: string;
    title: string;
    order: number;
}
