import { Button } from "@nextui-org/react";
import PageHead from "@/components/commons/PageHead";
import { getSession, useSession } from "next-auth/react";
import Nextauth from "./api/auth/[...nextauth]";
import { SessionExtended } from "@/types/Auth";

export default function Home() {
  return (
    <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
      <PageHead />
      <Button color="primary">Button</Button>
    </main>
  );
}
