import { Module } from '@nestjs/common';
import { UserAuthService } from './user-auth.service';
import { UserAuthResolver } from './user-auth.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/entities/user.entity';
import { JwtService, JwtModule } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { JwtRegister } from 'utils/JWT';

@Module({
  providers: [UserAuthResolver, UserAuthService, UsersService],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtRegister,
  ],
})
export class UserAuthModule {}
