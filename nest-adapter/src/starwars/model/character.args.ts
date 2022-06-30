import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class CharacterArgs {
  @Field(type => Int)
  page = 1;
}