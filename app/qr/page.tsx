'use client';
import { useSession } from "next-auth/react"
import { QRCodeSVG } from "qrcode.react";

export default function Page() {
  const { data: session } = useSession({ required: true })
  return (
    <>
      <p>QR CODE HERE</p>
      <QRCodeSVG value={session?.user?.email as string} size={256} />
    </>
  );
}