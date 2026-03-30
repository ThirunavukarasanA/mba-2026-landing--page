import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    whatsapp: { type: String, required: false },
    email: { type: String, required: true },
    question: { type: String, required: true },
    program: { type: String, required: false },
  },
  { timestamps: true }
);

export default mongoose.models.Question || mongoose.model("Question", QuestionSchema, "mba-ask-2026");
