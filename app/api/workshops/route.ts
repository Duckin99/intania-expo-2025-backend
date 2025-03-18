import { BuildingParamsSchema } from "@/common/schemas/query";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { string } from "zod";

// Get All Workshops
export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams;
  const parameters: string[] = searchParams.get("data")?.split(',') || [];
  
  if (parameters.length == 0){ // No parameters
    const workshops = await prisma.workshop.findMany({
      include:{
        workshopSlots:true,
        intaniaLocation:true
      }
    })
    return NextResponse.json(workshops, {status:200});
  } else {
    const selectedFields = BuildingParamsSchema.safeParse(Object.fromEntries(parameters.map(key => [key, true])));
    if (selectedFields.success){ // valid input
      const workshops = await prisma.workshop.findMany({
        select:selectedFields.data
      })
      return NextResponse.json(workshops, {status:200});
    } else { // invalid input
      return NextResponse.json("invalid query parameter", {status:400});
    }
  }
}
