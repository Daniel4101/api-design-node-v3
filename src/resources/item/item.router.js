import { Router } from 'express'
import controllers from './item.controllers'
const router = Router()
router
  .route('/')
  .get(controllers.read)
  .delete(controllers.delete)
  .post(controllers.post)
  .put(controllers.put)
router
  .route('/:id')
  .get(controllers.read)
  .delete(controllers.delete)
  .post(controllers.post)
  .put(controllers.put)
export default router
