import { Button } from "@nextui-org/react";
import PageHead from "@/components/commons/PageHead";
import { getSession, useSession } from "next-auth/react";
import Nextauth from "./api/auth/[...nextauth]";
import { SessionExtended } from "@/types/Auth";
import LandingPageLayout from "@/components/commons/PageHead/layouts/LandingPageLayout";
import Home from "@/components/views/Home";

const HomePage = () => {
  return (
    <LandingPageLayout title="CrossBuy | Home">
      <Home />
    </LandingPageLayout>
  );
};

export default HomePage;
