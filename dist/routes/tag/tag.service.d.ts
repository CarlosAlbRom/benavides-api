import { Tag } from 'src/entities/tag.entity';
import { Repository } from 'typeorm';
export declare class TagService {
    private tagRepo;
    constructor(tagRepo: Repository<Tag>);
    getTags(): Promise<Tag[]>;
    getTagById(id: number): Promise<Tag>;
    getMultipleTagsById(ids: number[]): Promise<Tag[]>;
    createTag(name: string, code: string): Promise<{
        code: string;
        name: string;
    } & Tag>;
    updateTag(id: number, name: string, code: string): Promise<import("typeorm").UpdateResult>;
    deleteTag(id: any): Promise<import("typeorm").DeleteResult>;
}
