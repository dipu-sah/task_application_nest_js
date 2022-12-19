import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

export function Match(property: string, validationOptions?: ValidationOptions) {
  return (object: Object, propertyName: string) => {
    // console.log(object);

    registerDecorator({
      target: object.constructor,
      propertyName,
      constraints: [property], // to be used by args.constraints in MatchConstraint class
      validator: MatchConstraint,
      options: validationOptions,
    });
  };
}
@ValidatorConstraint({ name: 'Match' })
export class MatchConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    const relatedValue = (args.object as any)[relatedPropertyName];
    return value === relatedValue;
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return `${validationArguments.constraints[0]} must match ${validationArguments.property}`;
  }
}
