import { Body,Req, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}
    @Post('/signUp')
    async signUp(@Body() authCredentialDto:AuthCredentialDto):Promise<void>{
        return this.authService.signUp(authCredentialDto);
    }
    @Post('/signIn')
    async signIn(@Body() authCredentialDto:AuthCredentialDto):Promise<{accessToken:string}>{
        return this.authService.signIn(authCredentialDto);
    }
    @Post('/test')
    @UseGuards(AuthGuard())
    test(@Req() req){
        console.log(req);
    }
}
