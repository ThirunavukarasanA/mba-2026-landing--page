import mongoose from "mongoose";

const BrochureSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    whatsapp: { type: String, required: false },
    email: { type: String, required: true },
    program: { type: String, required: false },
  },
  { timestamps: true }
);

export default mongoose.models.Brochure || mongoose.model("Brochure", BrochureSchema, "mba-brochure-2026");
