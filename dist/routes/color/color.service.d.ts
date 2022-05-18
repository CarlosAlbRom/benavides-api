import { Color } from 'src/entities/color.entity';
import { Repository } from 'typeorm';
export declare class ColorService {
    private colorRepo;
    constructor(colorRepo: Repository<Color>);
    getColors(): Promise<Color[]>;
    getColorByType(type: number): Promise<Color[]>;
    getColorById(id: number): Promise<Color>;
    getMultipleColorsById(ids: number[]): Promise<Color[]>;
    createColor(name: string, code: string, hex: string): Promise<{
        code: string;
        name: string;
        hex: string;
    } & Color>;
    updateColor(id: number, name: string, code: string, hex: string): Promise<import("typeorm").UpdateResult>;
    deleteColor(id: any): Promise<import("typeorm").DeleteResult>;
}
