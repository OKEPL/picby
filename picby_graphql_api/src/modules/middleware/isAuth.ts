import { Context } from "src/types/Context";
import { MiddlewareFn } from "type-graphql";

export const isAuth: MiddlewareFn<Context> = async ({ context }, next) => {
  if(!context.req.session){
    throw new Error('no session found/not authenticated')
  }

  if(!context.req.session.userId) {
    throw new Error('no user id/not authenticated')
  }
  return next();
};