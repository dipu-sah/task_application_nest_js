import { Module } from '@nestjs/common';
import { UserAuthService } from './user-auth.service';
import { UserAuthResolver } from './user-auth.resolver';

@Module({
  providers: [UserAuthResolver, UserAuthService]
})
export class UserAuthModule {}
