import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType({ description:'Star ships' })
export class Ship {
    @Field({ nullable: true })
    name: string;
    
    @Field({ nullable: true })
    model: string;
    
    @Field({ nullable: true })
    manufacturer: string;
    
    @Field({ nullable: true })
    cost_in_credits: string;
    
    @Field({ nullable: true })
    length: string;
    
    @Field({ nullable: true })
    max_atmosphering_speed: string;
    
    @Field({ nullable: true })
    crew: string;
    
    @Field({ nullable: true })
    passengers: string;
    
    @Field({ nullable: true })
    cargo_capacity: string;
    
    @Field({ nullable: true })
    consumables: string;
    
    @Field({ nullable: true })
    hyperdrive_rating: string;
    
    @Field({ nullable: true })
    MGLT: string;
    
    @Field({ nullable: true })
    starship_class: string;
    
    @Field(() => [String])
    pilots: string[];
    
    @Field(() => [String])
    films: string[];
    
    @Field({ nullable: true })
    created: string;
    
    @Field({ nullable: true })
    edited: string;
    
    @Field({ nullable: true })
    url: string;
}
