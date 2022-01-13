import { JwtService } from '@nestjs/jwt';
import { APIResponse } from 'src/models/response.model';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    private jwtService;
    constructor(authService: AuthService, jwtService: JwtService);
    logIn(username: any, password: any): Promise<APIResponse> | APIResponse;
}
