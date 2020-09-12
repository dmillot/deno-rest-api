import { Router } from 'https://deno.land/x/oak/mod.ts'
import quoteController from './controllers/quote.ts'

const router = new Router()
router.get('/quotes', quoteController.index)
      .get('/quotes/:id', quoteController.show)
      .post('/quotes', quoteController.create)
      .put('/quotes/:id', quoteController.update)
      .delete('/quotes/:id', quoteController.destroy)

export default router
