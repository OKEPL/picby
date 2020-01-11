import { v4 } from 'uuid';
import { redis } from '../../redis';

const ONE_DAY_EXPIRATION_TIME = 60 * 60 * 24;

export const createAccountConfirmationUrl = async (userId: number) => {
  const confirmationToken = v4();
  await redis.set(confirmationToken, userId, 'ex', ONE_DAY_EXPIRATION_TIME);

  //TODO: set the proper URL for development and production
  return `http://localhost:3000/user/confirm/${confirmationToken}`;
};
