import express from 'express';
const router = express.Router()
import {
  createFlashcard,
  getAllFlashcards,
  getSingleFlashcard,
  deleteFlashcard,
  updateFlashcard
} from '../controllers/controllers.js'


router.get('/', getAllFlashcards)

router.get('/:id', getSingleFlashcard)

router.post('/create', createFlashcard)

router.delete('/:id', deleteFlashcard)

router.patch('/update/:id', updateFlashcard)

export default router

