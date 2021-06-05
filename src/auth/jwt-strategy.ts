import { Injectable, Inject, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";
import { UserRepository } from "./user.repository";
import { ExtractJwt } from "passport-jwt";
import { JwtPayload } from "./jwt-payload.interface";
import { User } from "./user.entity";
@Injectable()
export class JwtStratetry extends PassportStrategy(Strategy){
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: UserRepository,
      ) {
          super({
              secretOrKey: 'topSecret51',
              jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
          })
      }
      async validate(payload:JwtPayload):Promise<User>{
        const {username} = payload;
        const user:User = await this.userRepository.findOne({username});
        if(!user) throw new UnauthorizedException();
        return user;
      }
}
