import { APIResponse } from 'src/models/response.model';
import { ColorService } from './color.service';
export declare class ColorController {
    private readonly colorService;
    constructor(colorService: ColorService);
    getColors(): Promise<APIResponse>;
    getColorById(id: number): Promise<APIResponse>;
    createColor(name: string, code: string, hex: string): Promise<APIResponse>;
    updateColor(id: number, name: string, code: string, hex: string): Promise<APIResponse>;
    deleteColor(id: number): Promise<APIResponse>;
}
