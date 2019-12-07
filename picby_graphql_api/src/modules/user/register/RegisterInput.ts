import { IsEmail } from "class-validator";
import { Field, InputType } from "type-graphql";
import { DoesEmailExist } from "./isEmailAlreadyExists";

@InputType()
export class RegisterInput {
  @Field()
  @IsEmail()
  @DoesEmailExist({message: "email already in use"})
  email: string;

  @Field() 
  password: string;
}