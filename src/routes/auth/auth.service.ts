import { APIResponse } from 'src/models/response.model';
import { User } from './../../entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(User) private userRepo: Repository<User>,
    ){}

    public logIn(username: string, password: string){
        return this.userRepo.findOne({where: {
            username: username,
            password: password
        }})
    }

    public async badRequest(){
        return new APIResponse().error("Bad Request");
    }

}
