import { HttpService, Injectable } from "@nestjs/common"
import { CharacterPage } from "./model/characterpage"
import { ShipPage } from "./model/shipspage";


@Injectable()
export class StarWarsService {

    private static getApiEndpoint() {
        return process.env.API_HOST || 'https://swapi.dev/api/'
      }

    public constructor(private readonly client: HttpService) {}
  
    public async fetchCharacters(page: number = 1): Promise<CharacterPage> {
      const { data } = await this.client.get(`${StarWarsService.getApiEndpoint()}people/?page=${page}`).toPromise();
      return data;
    }
  
    public async fetchShips(page: number = 1): Promise<ShipPage> {
      const { data } = await this.client.get(`${StarWarsService.getApiEndpoint()}starships/?page=${page}`).toPromise();
      return data;
    }
}
