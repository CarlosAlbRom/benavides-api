import { APIResponse } from 'src/models/response.model';
import { PresentationService } from './presentation.service';
export declare class PresentationController {
    private readonly presentationService;
    constructor(presentationService: PresentationService);
    getPresentations(): Promise<APIResponse>;
    getPresentationById(id: number): Promise<APIResponse>;
    createPresentation(name: string, code: string): Promise<APIResponse>;
    updatePresentation(id: number, name: string, code: string): Promise<APIResponse>;
    deletePresentation(id: number): Promise<APIResponse>;
}
