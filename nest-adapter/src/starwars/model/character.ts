import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType({ description: 'character'})
export class Character {
    @Field()
    name: string;

    @Field()
    height: string;

    @Field()
    mass: string;

    @Field()
    hair_color: string;

    @Field()
    skin_color: string;

    @Field()
    eye_color: string;

    @Field()
    birth_year: string;

    @Field()
    gender: string;

    @Field()
    homeworld: string;

    @Field(() => [String])
    films: string[];

    @Field(() => [String])
    species: string[];

    @Field(() => [String])
    vehicles: string[];

    @Field(() => [String])
    starships: string[];

    @Field()
    created: string;
    
    @Field()
    edited: string;
    
    @Field()
    url: string;
}
