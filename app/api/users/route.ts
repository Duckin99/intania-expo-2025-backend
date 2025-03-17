// Create user
export async function POST(request: Request) {}

// Register new user
export async function PUT(request: Request) {
  // const body = await request.json();
  // const parseResponse = CreateUserSchema.safeParse(body);
  // if (!parseResponse.success) {
  //   return NextResponse.json(
  //     { message: "Invalid request body", error: parseResponse.error },
  //     { status: 404 }
  //   );
  // }
  // const dto = parseResponse.data;
  // let { result, error } = await getDocument("users", dto.email);
  // if (error) {
  //   return NextResponse.json(
  //     { message: "Internal Server Error" },
  //     { status: 500 }
  //   );
  // }
  // if (result?.exists()) {
  //   return NextResponse.json(
  //     { message: "Email already exists" },
  //     { status: 404 }
  //   );
  // }
  // error = await createDocument("users", dto.email, dto);
  // if (error) {
  //   return NextResponse.json(
  //     { message: "Internal Server Error" },
  //     { status: 500 }
  //   );
  // }
  // const user: User = {
  //   id: "generate this",
  //   name: dto.name,
  //   surname: dto.surname,
  //   sixDigitCode: "generate this",
  //   registeredWorkshopSlotsID: [],
  // };
  // return NextResponse.json({ user: dto }, { status: 201 });
}
