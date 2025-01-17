import "@/styles/globals.css";
import { cn } from "@/utils/cn";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <main
        className={cn(
          publicSans.className,
          "lg:py col items flex min-h-screen min-w-full items-center justify-center gap-10 py-10",
        )}
      >
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}
