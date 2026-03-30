import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Brochure from "@/models/Brochure";
import Question from "@/models/Question";
import Callback from "@/models/Callback";
import ReserveSeat from "@/models/ReserveSeat";

export async function POST(req: Request) {
  try {
    await dbConnect();
    
    const body = await req.json();
    const { formType, formData } = body;
    
    if (formType === "brochure") {
      const newBrochure = new Brochure(formData);
      await newBrochure.save();
      return NextResponse.json({ success: true, message: "Brochure form saved successfully" }, { status: 201 });
    } else if (formType === "question") {
      const newQuestion = new Question(formData);
      await newQuestion.save();
      return NextResponse.json({ success: true, message: "Question form saved successfully" }, { status: 201 });
    } else if (formType === "callback") {
      const newCallback = new Callback(formData);
      await newCallback.save();
      return NextResponse.json({ success: true, message: "Callback form saved successfully" }, { status: 201 });
    } else if (formType === "reserve") {
      const newReserve = new ReserveSeat(formData);
      await newReserve.save();
      return NextResponse.json({ success: true, message: "Reserve Seat form saved successfully" }, { status: 201 });
    } else {
      return NextResponse.json({ success: false, message: "Invalid form type" }, { status: 400 });
    }
  } catch (error: any) {
    console.error("Error saving form:", error);
    return NextResponse.json({ success: false, message: "Internal Server Error", error: error.message }, { status: 500 });
  }
}
