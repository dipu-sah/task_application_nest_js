import { Test, TestingModule } from '@nestjs/testing';
import { UserAuthResolver } from './user-auth.resolver';
import { UserAuthService } from './user-auth.service';

describe('UserAuthResolver', () => {
  let resolver: UserAuthResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserAuthResolver, UserAuthService],
    }).compile();

    resolver = module.get<UserAuthResolver>(UserAuthResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
