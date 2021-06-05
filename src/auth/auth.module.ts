
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserProviders } from './user.providers';
import {PassportModule} from '@nestjs/passport'
import {JwtModule} from '@nestjs/jwt'
import { JwtStratetry } from './jwt-strategy';
@Module({
  imports: [PassportModule.register({defaultStrategy:'jwt'}),
  JwtModule.register({
    secret:'topSecret51',
    signOptions:{
      expiresIn:3600,
    }
  }),DatabaseModule],
  providers: [
    UserProviders[0],
    AuthService, JwtStratetry
  ],
  controllers: [AuthController],
  exports: [JwtStratetry,PassportModule]
})
export class AuthModule {}
