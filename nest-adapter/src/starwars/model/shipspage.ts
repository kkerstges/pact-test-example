import { Field, ObjectType } from "@nestjs/graphql";
import { Ship } from "./ship";

@ObjectType({ description:'Star ships page' })
export class ShipPage {
    @Field()
    count: number;
    
    @Field({ nullable: true })
    next: string;
    
    @Field({ nullable: true })
	previous: string;
    
    @Field(type => [Ship])
	results: Ship[]
}
