import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiAcceptedResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CreateUserAuthInput } from './dto/create-user-auth.input';
import { UserAuthService } from './user-auth.service';

@Controller('auth')
@ApiTags('User Auth')
export class UserAuthController {
  constructor(private readonly userAuthService: UserAuthService) {}
  @Post('/login')
  @ApiOperation({
    description: 'This is the api to get auth token for user',
  })
  @ApiAcceptedResponse({
    status: 200,
  })
  @ApiUnauthorizedResponse()
  getAuthToken(@Body() createUserAuthInput: CreateUserAuthInput) {
    return this.userAuthService.getUserAuthToken(createUserAuthInput);
  }
}
