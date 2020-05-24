import { Router } from 'express'
import controllers from './item.controllers'
const router = Router()
router
  .route('/')
  .get(controllers.getMany)
  .post(controllers.createOne)

// /api/item/:id
router
  .route('/:id')
  .get(controllers.read)
  .delete(controllers.delete)
  .post(controllers.post)
  .put(controllers.put)
export default router
