import mongoose from "mongoose";

const flashcardSchema = new mongoose.Schema({
  vocab: { type: String, required: true },
  definition: { type: String, required: true},
});

const Flashcard = mongoose.model("flashcardSchema", flashcardSchema);

export default Flashcard