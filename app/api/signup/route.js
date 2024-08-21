import User from "@/models/User";
import { connectToDB } from "@/utils/connect";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {email,password,role}=await req.json();
    await connectToDB();
    const data = await User.findOne({ email, password });
    if (data) {
      return NextResponse.json(
        { message: "Account already exist" },
        { status: 200 }
      );
    } else {
        User.create({email,password,type:role});
      return NextResponse.json({ message: "Account created" }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Account created" }, { status: 200 });

  }
}
