import { ApolloServer } from "apollo-server-express";
import connectRedis from 'connect-redis';
import cors from 'cors';
import express from "express";
import session from "express-session";
import { buildSchema } from "type-graphql";
import { createConnection, getConnectionOptions } from "typeorm";
import { LoginResolver } from "./modules/user/Login";
import { MeResolver } from "./modules/user/Me";
import { RegisterResolver } from './modules/user/Register';
import { redis } from "./redis";


const COOKIE_MAX_AGE_LIMIT = 1000*60*60*24*7*36;
const AUTH_COOKIE_NAME = "qid";
// TODO: we should find a way to store it secretly somewhere
const AUTH_COOKIE_SECRET = "asdasda";
const DEFAULT_PORT = 4000;


(async () => {
  const app = express();

  const options = await getConnectionOptions(
    process.env.NODE_ENV || "development"
  );
  await createConnection({ ...options, name: "default" });

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [RegisterResolver, LoginResolver, MeResolver],
      validate: true,

    }),
    context: ({ req, res }) => ({ req, res })
  });

  const RedisStore = connectRedis(session);

  app.use(cors({
    credentials: true,
    origin: '*'
  }))
  
  app.use(
    session({
      store: new RedisStore({
        client: redis as any
      }),
      name: AUTH_COOKIE_NAME,
      secret: AUTH_COOKIE_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge:  COOKIE_MAX_AGE_LIMIT//7 years

      }
    })
  )

  apolloServer.applyMiddleware({ app, cors: false });
  const port = process.env.PORT || DEFAULT_PORT;
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}/graphql`);
  });
})();
