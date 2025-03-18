// Get Building
import { prisma } from "@/lib/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NextResponse } from "next/server";

// Get Building
export async function GET(request: Request,
   { params }: { params: Promise<{ id: string }> }) {
    const {id} = await params
		let building;
    try{
        building = await prisma.building.findFirstOrThrow({
            where:{
                id:id
            },
        })
        return NextResponse.json(building, {status:200});
    } catch (error) {
			if (error instanceof PrismaClientKnownRequestError){
				if (error.code === "P2025"){
					return NextResponse.json("not found",{status:404});
				}
			}
			return NextResponse.json(error, {status:500});
		}
}
