import { testConnection } from "../../../test-utils/testConnection"
import { Connection } from "typeorm";
import faker from 'faker';
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

describe('Me', () => {
  it('get user', async () => {


    const user = await User.create({
      email: faker.internet.email(),
      password: faker.internet.password(8)
    }).save();

   const response =  await gCall({
      source: meQuery,
      userId: user.id
    })


    console.log(response);
    expect(response).toMatchObject({
      data: {
        me: {
          id: `${user.id}`,
          email: user.email
        }
      }
    })
  })

  it("return null", async () => {
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