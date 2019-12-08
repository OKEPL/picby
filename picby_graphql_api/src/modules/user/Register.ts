import * as bcrypt from 'bcryptjs';
import { Arg, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import { User } from '../../entity/User';
import { isAuth } from '../middleware/isAuth';
import { RegisterInput } from './register/RegisterInput';

@Resolver(User)
export class RegisterResolver {

  @UseMiddleware(isAuth)
  @Query(() => String)
  hello() {
    return "hello!";
  }

  @Mutation(() => User)
  async register(
    @Arg("data") {email, password} :RegisterInput,
  ):Promise<User> {
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = await User.create({
        email,
        password: hashedPassword
      }).save();

      return user;
  }
}
