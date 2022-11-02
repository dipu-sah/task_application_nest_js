import { Injectable } from '@nestjs/common';
import { CreateUserAuthInput } from './dto/create-user-auth.input';
import { UpdateUserAuthInput } from './dto/update-user-auth.input';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { comparePlainAndHashedText } from '../../utils/bcrypt';
import { JWT_CONFIG_OPTIONS } from 'utils/JWT';
@Injectable()
export class UserAuthService extends PassportStrategy(Strategy) {
  constructor(
    private readonly userService: UsersService,
    private readonly tokenService: JwtService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWT_CONFIG_OPTIONS.secret,
    });
  }
  getUserAuthToken(createUserAuthInput: CreateUserAuthInput) {
    return this.userService
      .findByEmail(createUserAuthInput.username)
      .then((e) => {
        if (
          comparePlainAndHashedText(createUserAuthInput.password, e.password)
        ) {
          return this.tokenService.sign({
            email: e.email,
            type: 'user-login',
          });
        }
        throw new UnauthorizedException();
      });
  }
}
