import { APIResponse } from 'src/models/response.model';
import { User } from './../../entities/user.entity';
import { Repository } from 'typeorm';
export declare class AuthService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    logIn(username: string, password: string): Promise<User>;
    badRequest(): Promise<APIResponse>;
}
