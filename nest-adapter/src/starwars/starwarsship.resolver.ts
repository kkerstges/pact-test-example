import { Args, Query, Resolver } from '@nestjs/graphql';
import { CharacterPage } from './model/characterpage';
import { Ship } from './model/ship';
import { ShipArgs } from './model/ship.args';
import { ShipPage } from './model/shipspage';
import { StarWarsService } from './starwars.service';

@Resolver(of => Ship)
export class StarWarsShipResolver {
  constructor(private readonly swClient: StarWarsService) {}

  @Query(returns => ShipPage)
  async ships(@Args() shipArgs: ShipArgs): Promise<ShipPage> {
    const page = await this.swClient.fetchShips(shipArgs.page);
    return page;
  }
}