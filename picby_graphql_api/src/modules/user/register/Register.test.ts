import { testConnection } from "../../../test-utils/testConnection"
import { Connection } from "typeorm";
import { internet } from 'faker';
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

const registerMutation = `
  mutation Register($data: RegisterInput!) {
    register(data: $data) {
      id
      email
    }
  }
`

describe('Register', () => {
  it('create user', async () => {
    const user = {
<<<<<<< HEAD
      email: internet.email(),
      password: internet.password(8)
=======
      email: faker.internet.email(),
      password: faker.internet.password(8)
>>>>>>> master
    }
   const response =  await gCall({
      source: registerMutation,
      variableValues: {
        data: user
      }
    })

<<<<<<< HEAD
=======
    if (response.errors) {
      console.log(response.errors[0].originalError);
    }

>>>>>>> master
    expect(response).toMatchObject({
      data: {
        register: {
          email: user.email
        }
      }
    })

    const dbUser = await User.findOne({where: {email: user.email}})
    expect(dbUser).toBeDefined();
    expect(dbUser?.isConfirmed).toBeFalsy();
  })
})