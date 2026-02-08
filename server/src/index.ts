import { Hono } from 'hono'
import admin from './routes/admin'

const app = new Hono()

app.route('/admin', admin)




app.notFound((c) => {
  return c.html('<h1>Custom 404 Message</h1>', 404)
})
export default app
