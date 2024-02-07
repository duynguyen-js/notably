import Flashcard from "../mongodb/models/flashCardModels.js";
import mongoose from 'mongoose'

// get all flashcards
const getAllFlashcards = async(req, res) => {
  try {
    const flashcards = await Flashcard.find()
    res.status(200).json({ success: true, data: flashcards})
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

// get single flashcard
const getSingleFlashcard = async(req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ success: false, message: "No such flashcard"})
    }
    const flashcard = await Flashcard.findById(id);

    if (!flashcard) {
      return res.status(404).json({ success: false, message: "No such flashcard"})
    }
    res.status(200).json({ success: true, data: flashcard})
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

// create a new flashcard
const createFlashcard = async (req, res) => {
  try {
    const { vocab, definition } = req.body;

    const flashcard = await Flashcard.create({ vocab, definition });

    if(!flashcard) {
      res.status(500).json({success: false, message: "Unable to create new flashcard, please try again"})
    }

    res.status(201).json({success: true, data: flashcard})
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

// delete a flashcard
const deleteFlashcard = async(req, res) => {
  try {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ success: false, message: "No such flashcard" })
    }

    const flashcard = await Flashcard.findByIdAndDelete(id)

    res.status(200).json({ success: true, message: flashcard})
  } catch (error) {
    res.status(500).json({ success: false, message: error.message})
  }
}

// update a flashcard
const updateFlashcard = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ success: false, message: "Invalid Id"})
    }

    const flashcard = await Flashcard.findByIdAndUpdate(id, req.body, {
      new: true
    })

    res.status(200).json({ success: true, message: flashcard})
  } catch(error) {
    res.status(500).json({ success: false, message: error.message})
  }
}

export {
  createFlashcard,
  getAllFlashcards,
  getSingleFlashcard,
  deleteFlashcard,
  updateFlashcard
};