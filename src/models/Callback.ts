import mongoose from "mongoose";

const CallbackSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    whatsapp: { type: String, required: false },
    email: { type: String, required: true },
    preferredTime: { type: String, required: true },
    program: { type: String, required: false },
  },
  { timestamps: true }
);

export default mongoose.models.Callback || mongoose.model("Callback", CallbackSchema, "mba-speak-2026");
