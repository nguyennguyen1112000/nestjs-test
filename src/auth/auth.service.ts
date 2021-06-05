import { Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import { AuthCredentialDto } from './dto/auth-credentials.dto';
import {UserRepository} from './user.repository'
import * as bcrypt from 'bcrypt'
import {JwtService} from '@nestjs/jwt'
@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: UserRepository,
    private jwtService: JwtService
  ) {}
  async signUp (authCredentialDto:AuthCredentialDto):Promise<void>{
      return this.userRepository.createUser(authCredentialDto)
  }
  async signIn(authCredentialDto:AuthCredentialDto):Promise<{accessToken:string}>{
    const {username,password} = authCredentialDto;
    const user = await this.userRepository.findOne({username})
    if(user && (await bcrypt.compare(password,user.password)))
    {
      const payload ={username};
      const accessToken = await this.jwtService.sign(payload);
      return {accessToken};
    }
    else throw  new UnauthorizedException('Please check your login credentials');
  }


}