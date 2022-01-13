import { BaseEntity } from 'typeorm';
export declare class Color extends BaseEntity {
    id_color: number;
    name: string;
    code: string;
    hex: string;
}
