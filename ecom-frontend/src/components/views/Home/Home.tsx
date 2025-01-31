import LandingPageLayout from "@/components/commons/PageHead/layouts/LandingPageLayout";
import HomeCarousel from "./HomeCarousel";

const Home = () => {
  return (
    <div>
      <HomeCarousel isLoading={false} />
    </div>
  );
};

export default Home;
