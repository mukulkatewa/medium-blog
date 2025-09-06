import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import z from "zod";
import { signinInput } from "@mukulkatewa/medium-common";
import { signupInput } from "@mukulkatewa/medium-common";


export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    }
}>();

userRouter.post('/signup',async (c) => {

  console.log("DB URL=> ", c.env.DATABASE_URL);

  const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try{
  const body = await c.req.json();
  console.log("Body received:", body);
  // const { success } = signupInput.safeParse(body);
  
  // if(!success) {
  //   return c.json({
  //     message: "Inputs not correct"
  //   }, 400)
  // }

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    }, 
  });

  const token = await sign({ id: user.id }, c.env.JWT_SECRET);

  return c.json({
    jwt: token
  })
} catch(e){
  console.log(e);
  return c.json({
        message: "Error while fetching blog post "
    }, 500);
}
}) 

userRouter.post('/signin',async (c)=>{
    const prisma = new PrismaClient({
    datasourceUrl : c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  // const { success } = signinInput.safeParse(body);
  // if(!success) {
  //   return c.json({
  //     message: "Invalid input format"
  //   }, 411);
  // }

  const user = await prisma.user.findUnique({
    where: {
      email: body.email
    }
  });

  if(!user || user.password !== body.password) {
    return c.json({ error: "user not found" }, 403);
  }

  const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
  return c.json({ jwt });

})