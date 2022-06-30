import { Args, Query, Resolver } from '@nestjs/graphql';
import { CharacterArgs } from './model/character.args';
import { Character } from './model/character';
import { CharacterPage } from './model/characterpage';
import { StarWarsService } from './starwars.service';

@Resolver(of => Character)
export class StarWarsCharacterResolver {
  constructor(private readonly swClient: StarWarsService) {}

  @Query(returns => CharacterPage)
  async characters(@Args() characterArgs: CharacterArgs): Promise<CharacterPage> {
    const page = await this.swClient.fetchCharacters(characterArgs.page);
    return page;
  }
}