import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { verify } from 'hono/jwt';
export const blogRouter = new Hono();
blogRouter.use("/*", async (c, next) => {
    const authHeader = c.req.header("authorization") || "";
    // const token = authHeader.split(" ")[1];
    const user = await verify(authHeader, c.env.JWT_SECRET);
    if (user) {
        //@ts-ignore
        c.set("userId", user.id);
        await next();
    }
    else {
        c.status(403);
        return c.json({
            message: "You are not logged in"
        });
    }
});
// blogRouter.use("/*", async (c, next) => {
//     const jwt = c.req.header('Authorization');
//     if(!jwt){
//         c.status(401);
//         return c.json({
//             error: "unauthorized"
//         });
//     }
//     const token = jwt.split(' ')[1];
//     const payload = await verify(token, c.env.JWT_SECRET);
//     if(!payload){
//         c.status(401);
//         return c.json({
//             error: "unauthorized"
//         });
//     }
//     c.set('userId', payload.id);
//     await next();
// })
blogRouter.post('/', async (c) => {
    const userId = c.get('userId');
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const blog = await prisma.blog.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: userId
        }
    });
    return c.json({
        id: blog.id
    });
});
blogRouter.put('/', async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const blog = await prisma.blog.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content
        }
    });
    return c.json({
        id: blog.id
    });
});
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const blogs = await prisma.blog.findMany();
    return c.json({
        blogs
    });
});
blogRouter.get('/:id', async (c) => {
    const id = c.req.param('id');
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
        const blog = await prisma.blog.findUnique({
            where: {
                id: id
            },
        });
        return c.json({
            blog
        });
    }
    catch (e) {
        c.status(411);
        return c.json({
            message: "Error while fetching blog post "
        });
    }
});
