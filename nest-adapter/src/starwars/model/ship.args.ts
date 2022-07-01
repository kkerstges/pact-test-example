import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class ShipArgs {
  @Field(() => Int)
  page = 1;
}