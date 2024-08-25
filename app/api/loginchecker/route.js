import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        const {email}= await req.json(); 
        return NextResponse.json({data:await User.findOne({email:email})})
    } catch (error) {
        
    }
}