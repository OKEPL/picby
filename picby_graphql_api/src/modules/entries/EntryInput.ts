import { Entry } from "src/entity/Entry";
import { Stream } from "stream";
import { Field, InputType } from "type-graphql";

@InputType()
export class AddEntryInput {
  @Field()
  entry: Entry;

  @Field({nullable: true})
  catalogId: string;

  createReadStream: () => Stream;
}