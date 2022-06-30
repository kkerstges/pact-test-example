import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class ShipArgs {
  @Field(type => Int)
  page = 1;
}