"use client";

import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <Inner />
    </SessionProvider>
  );
}

function Inner() {
  const { data: session, status } = useSession();
  console.log("status: ", status);
  console.log("session", JSON.stringify(session));
  return (
    <div>
      <p>{JSON.stringify(session)}</p>
      <p>User Email : {session ? session?.user?.email : "Not sign In Yet"}</p>
      <button onClick={() => signIn("google", { callbackUrl: "/register" })}>
        Sign In
      </button>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}
