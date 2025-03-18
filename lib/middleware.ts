import { Role } from "@prisma/client";
import { NextResponse } from "next/server";
import { parseToken, Payload } from "./jwt";

export interface MiddlewareResponse<T> {
  pass: boolean;
  response?: NextResponse;
  data?: T;
}

export function onlyAuthorized(request: Request): MiddlewareResponse<Payload> {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader) {
    return {
      pass: false,
      response: NextResponse.json(
        { error: "Authorization header not found" },
        { status: 401 }
      ),
    };
  }

  const token = authHeader.split(" ")[0]; // "Bearer ........"

  const payload = parseToken(token);
  if (!payload) {
    return {
      pass: false,
      response: NextResponse.json(
        { error: "invalid Authorization token" },
        { status: 401 }
      ),
    };
  }

  return { pass: true, data: payload };
}
export function isOneOfRole(
  roles: Role[],
  payload: Payload
): MiddlewareResponse<undefined> {
  if (!roles.includes(payload.role)) {
    return {
      pass: false,
      response: NextResponse.json({ error: "invalid role" }, { status: 403 }),
    };
  }
  return { pass: true };
}
