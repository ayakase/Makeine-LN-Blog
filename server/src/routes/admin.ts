import { Hono } from 'hono'
import { drizzle } from 'drizzle-orm/d1';
import { users } from '../db/schema';

type Bindings = {
    makeine: D1Database;
};

const admin = new Hono<{ Bindings: Bindings }>()
admin.get('/', (c) => c.text('App running'))
admin.get('/users', async (c) => {
    const db = drizzle(c.env.makeine);
    const result = await db.select().from(users);
    return c.json(result);
})
admin.post('/users', async (c) => {
    const db = drizzle(c.env.makeine);
    const body = await c.req.json();

    const newUser = await db.insert(users).values({
        name: body.name,
        email: body.email,
    }).returning();

    return c.json(newUser[0], 201);
});

export default admin
