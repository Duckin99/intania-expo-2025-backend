import { SortingSchema } from "@/common/schemas/query";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { fromZodError } from "zod-validation-error";

// Get All Buildings
// TODO: cannot get body if using GET method
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Extract sorting fields (default: sort by "name")
    const sortFields = searchParams.get("sorting")?.split(",") || [];
    const sortOrder = searchParams.get("order") || "true"; // Default: ascending

    // console.log(sortFields, sortOrder);

    // Build orderBy object for Prisma
    const orderBy = sortFields.map((field) => {
      const orderValue = sortOrder;

    if (orderValue !== "true" && orderValue !== "false") {
      throw NextResponse.json({ message: "Incorrect query" }, { status: 400 });
    }

    return { [field]: orderValue === "true" ? "asc" : "desc" };
    });

    // console.log(orderBy);

    try {
      const buildings = await prisma.building.findMany({
        include: { floors: { include: { rooms: true } } },
        orderBy,
      });
  
      return NextResponse.json(buildings, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: "Database error", error }, { status: 500 });
    }

  }
  catch (error) {
    if(error) return error
    return NextResponse.json({ message: "Internal Server Error", error }, { status: 500 });
  }
}
