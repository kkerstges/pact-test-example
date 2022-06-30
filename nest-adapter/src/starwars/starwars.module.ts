import { HttpModule, Module } from '@nestjs/common';
import { StarWarsCharacterResolver } from './starwarscharacter.resolver';
import { StarWarsService } from './starwars.service';
import { StarWarsShipResolver } from './starwarsship.resolver';

@Module({
    imports: [HttpModule],
    providers: [
        StarWarsCharacterResolver, 
        StarWarsShipResolver, 
        StarWarsService
    ],
})
export class StarWarsModule {}