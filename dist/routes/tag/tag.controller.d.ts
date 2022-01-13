import { APIResponse } from 'src/models/response.model';
import { TagService } from './tag.service';
export declare class TagController {
    private readonly tagService;
    constructor(tagService: TagService);
    getTags(): Promise<APIResponse>;
    getTagById(id: number): Promise<APIResponse>;
    createTag(name: string, code: string): Promise<APIResponse>;
    updateTag(id: number, name: string, code: string): Promise<APIResponse>;
    deleteTag(id: number): Promise<APIResponse>;
}
