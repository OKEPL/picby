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
      name: 'qid',
      secret: 'asdasda',
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000*60*60*24*7*365 //7 years

      }
    })
  )

  apolloServer.applyMiddleware({ app, cors: false });
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}/graphql`);
  });
})();
