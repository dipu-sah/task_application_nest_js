import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';

export const JWT_CONFIG_OPTIONS: JwtModuleOptions = {
  secret: 'ABCDEFGHI',
  privateKey: 'BBBBBBB',
  publicKey: 'aaaaa',
  signOptions: {
    algorithm: 'HS256',
    expiresIn: '1d',
    issuer: 'DIPU',
    mutatePayload: false,
  },
};

export const JwtRegister = JwtModule.register(JWT_CONFIG_OPTIONS);
