import { GraphQLUpload } from "apollo-server-express";
import { Arg, Mutation, Resolver } from "type-graphql";
import { AddEntryInput } from "./EntryInput";


@Resolver()
export class EntryResolver {

  @Mutation(() => Boolean)
  async addEntry(@Arg("entry", () => GraphQLUpload) {
    createReadStream,
    catalogId,
    entry
  }: AddEntryInput):Promise<boolean> {

    return new Promise(async (resolve, reject) => createReadStream)
  }
}