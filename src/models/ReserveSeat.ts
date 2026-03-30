import mongoose from "mongoose";

const ReserveSeatSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    whatsapp: { type: String, required: false },
    email: { type: String, required: true },
    program: { type: String, required: false },
  },
  { timestamps: true }
);

export default mongoose.models.ReserveSeat || mongoose.model("ReserveSeat", ReserveSeatSchema, "mba-2026-reserve-seat");
