import { testConnection } from "../../../test-utils/testConnection"
import { Connection } from "typeorm";
<<<<<<< HEAD
import {internet} from 'faker';
=======
import faker from 'faker';
>>>>>>> master
import { gCall } from "../../../test-utils/gCall";
import { User } from "../../../entity/User";
import { redis } from "../../../redis";

let conn: Connection;
beforeAll(async () => {

  conn = await testConnection();
  if(redis.status === "end") {
    await redis.connect()
  }
})


afterAll(async () => {
  await conn.close();
  redis.disconnect();
})

const meQuery = `
query {
    me {
      id
      email
  }
}
`

<<<<<<< HEAD
describe('Me Resolver', () => {
  it('should retrieve current user ', async () => {


    const {email, id} = await User.create({
      email: internet.email(),
      password: internet.password(8)
=======
describe('Me', () => {
  it('get user', async () => {


    const user = await User.create({
      email: faker.internet.email(),
      password: faker.internet.password(8)
>>>>>>> master
    }).save();

   const response =  await gCall({
      source: meQuery,
<<<<<<< HEAD
      userId: id
    })


    expect(response).toMatchObject({
      data: {
        me: {
          id: `${id}`,
          email: email
=======
      userId: user.id
    })


    console.log(response);
    expect(response).toMatchObject({
      data: {
        me: {
          id: `${user.id}`,
          email: user.email
>>>>>>> master
        }
      }
    })
  })

<<<<<<< HEAD
  it("return null if there's no userId in context", async () => {
=======
  it("return null", async () => {
>>>>>>> master
    const response = await gCall({
      source: meQuery
    })

    expect(response).toMatchObject({
      data: {
        me: null
      }
    })
  })
})