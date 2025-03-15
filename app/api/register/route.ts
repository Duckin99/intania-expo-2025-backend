import { User } from "@/app/types/user";
import addData from "@/firebase/firestore/addData";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body: User = await request.json();

  const error = await addData("users", body.email, body)
  if (error) {
    return NextResponse.json({ "error": error.message }, { status: 404 })
  }

  return NextResponse.json({ user: body }, { status: 201 })
}