import User from "@/models/User";
import { connectToDB } from "@/utils/connect";
import { NextResponse } from "next/server";

export  async function POST(req) {
  try {
    const {email,password,role}=await req.json()
    await connectToDB();
    const data = await User.findOne({ email, password,type:role });
    if (data) {
      return NextResponse.json(
        { message: "Login Successfully",role:data.type },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ message: "Login Failed" }, { status: 200 });
    }
  } catch (error) {
          return NextResponse.json({ message: "Login Failed" }, { status: 200 });

  }
}
