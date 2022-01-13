import { Presentation } from 'src/entities/presentation.entity';
import { Repository } from 'typeorm';
export declare class PresentationService {
    private presentationRepo;
    constructor(presentationRepo: Repository<Presentation>);
    getPresentations(): Promise<Presentation[]>;
    getPresentationById(id: number): Promise<Presentation>;
    getMultiplePresentationsById(ids: number[]): Promise<Presentation[]>;
    createPresentation(name: string, code: string): Promise<{
        code: string;
        name: string;
    } & Presentation>;
    updatePresentation(id: number, name: string, code: string): Promise<import("typeorm").UpdateResult>;
    deletePresentation(id: any): Promise<import("typeorm").DeleteResult>;
}
