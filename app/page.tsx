'use client'

import { SessionProvider, useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  return (
    <SessionProvider>
      <Inner />
    </SessionProvider>
  );
}

function Inner() {
  const { data: session } = useSession()
  return (
      <div>
        <p>User Email : {session ? session?.user?.email : "Not sign In Yet"}</p>
        <button onClick={() => signIn("google", { callbackUrl: "/register" })}>Sign In</button>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
  )
}