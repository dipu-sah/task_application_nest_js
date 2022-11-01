import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { getHashedText } from 'utils/bcrypt';

export interface iUser {
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  password: string;
}

@Schema({ collection: 'users', timestamps: true })
export class User implements iUser {
  @Prop({
    name: 'first_name',
    required: true,
    lowercase: true,
  })
  firstName: string;
  @Prop({
    lowercase: true,
    name: 'middle_name',
  })
  middleName: string;

  @Prop({
    lowercase: true,
    name: 'last_name',
    required: false,
  })
  lastName: string;

  @Prop({
    required: true,
    unique: true,
    lowercase: true,
  })
  email: string;

  @Prop({
    required: true,
  })
  password: string;
}
export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.pre('save', function (next) {
  let currentUser = this;
  currentUser.password = getHashedText(currentUser.password);
  next();
});
