import { Body, Controller, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { APIResponse } from 'src/models/response.model';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
        private jwtService: JwtService
    ) {}

    @Post('login')
    public logIn(
        @Body('username') username, 
        @Body('password') password
    ): Promise<APIResponse> | APIResponse{
        if (username && password) {
            return this.authService.logIn(username, password).then((res) => {
                if (res) {
                    let token = this.jwtService.sign({
                        id_user: res.id_user,
                        username: res.username,
                        last_name: res.last_name, 
                        name: res.name,
                        email: res.email
                    })
                    return new APIResponse().success(null, {
                        ...res, 
                        token: token
                    });
                } else {
                    return new APIResponse().error("User not Found");
                }
            }, (err) => {
                return new APIResponse().error(err.sqlMessage);
            })
        } else {
            return new APIResponse().error("Bad Request");
        }
    }
}
