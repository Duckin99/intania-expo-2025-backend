import { SortingSchema } from "@/common/schemas/query";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { fromZodError } from "zod-validation-error";

// Get All Buildings
// TODO: cannot get body if using GET method
export async function POST(request: Request) {
  let body;
  try {
    body = await request.json();
  } catch (error) {
    return NextResponse.json("Invalid request body", { status: 404 });
  }

  let sorting = SortingSchema.parse({
    columns: [],
    ascending: false,
  });

  if (body && body.sorting) {
    const parseResponse = SortingSchema.safeParse(body.sorting);
    if (!parseResponse.success) {
      return NextResponse.json(
        {
          message: fromZodError(parseResponse.error).toString(),
          error: parseResponse.error,
        },
        { status: 404 }
      );
    }
    sorting = parseResponse.data;
  }

  // TODO: handle error?
  const buildings = await prisma.building.findMany({
    include: {
      floors: {
        include: { rooms: true },
      },
    },
    orderBy: sorting.columns.map((column) => {
      let obj: any = {};
      obj[column] = sorting.ascending ? "asc" : "desc";
      return obj;
    }),
  });

  return NextResponse.json(buildings, { status: 200 });
}
