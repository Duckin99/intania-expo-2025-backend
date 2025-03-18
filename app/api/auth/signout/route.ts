import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// TODO: Bearer Auth Middleware here
export async function GET(request: Request) {
  let body;
  try {
    body = await request.json();
  } catch (error) {
    return NextResponse.json(
      { error: "invalid request body" },
      { status: 400 }
    );
  }
  const tokenId = body.tokenId || "";

  try {
    await prisma.token.delete({ where: { id: tokenId } });
  } catch (error) {
    return NextResponse.json({ error: "token not found" }, { status: 404 });
  }

  return NextResponse.json({}, { status: 200 });
}
