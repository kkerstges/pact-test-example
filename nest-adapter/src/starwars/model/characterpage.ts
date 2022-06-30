import { Field, ObjectType } from "@nestjs/graphql";
import { Character } from "./character";

@ObjectType({ description: 'character page' })
export class CharacterPage {
    @Field()
    count: number;

    @Field({ nullable: true })
	next: string;

    @Field({ nullable: true })
	previous: string;

    @Field(type => [Character])
	results: Character[]
}
