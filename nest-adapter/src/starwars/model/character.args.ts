import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class CharacterArgs {
  @Field(() => Int)
  page = 1;
}