import { ApolloDriverConfig, ApolloDriver } from "@nestjs/apollo"
import { HttpModule, Module } from "@nestjs/common"
import { GraphQLModule } from "@nestjs/graphql"
import { join } from "path"
import { StarWarsModule } from "./starwars/starwars.module"
import { StarWarsService } from "./starwars/starwars.service"

@Module({
  imports: [
    HttpModule, 
    StarWarsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    sortSchema: true,
    }),
],
  controllers: [],
  providers: [StarWarsService],
})
export class AppModule {}
