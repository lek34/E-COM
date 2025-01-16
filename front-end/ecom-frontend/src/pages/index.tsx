import { Button } from "@nextui-org/react";
import { Geist, Geist_Mono } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import PageHead from "@/components/commons/PageHead";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <PageHead />
        <Button color="primary">Button</Button>
      </main>
    </NextUIProvider>
  );
}
