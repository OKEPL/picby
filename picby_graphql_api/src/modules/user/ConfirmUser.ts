import { Arg, Mutation, Resolver } from 'type-graphql';
import { User } from '../../entity/User';
import { redis } from '../../redis';
import { CONFIRM_USER_PREFIX } from '../constants/redisPrefixes';

@Resolver(User)
export class ConfirmUserResolver {
  @Mutation(() => Boolean)
  async confirmUser(
    @Arg('token') token: string,

  ): Promise<boolean> {
    const userId = await redis.get(CONFIRM_USER_PREFIX + token);
    if (!userId) {
      return false;
    }

    await User.update({ id: userId }, { isConfirmed: true });

    await redis.del(token);
    return true;
  }
}
