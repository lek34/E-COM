import LandingPageLayout from "@/components/commons/PageHead/layouts/LandingPageLayout";
import HomeCarousel from "./HomeCarousel";
import { Fragment } from "react";
import HomeCategory from "./HomeCategory";

const Home = () => {
  return (
    <Fragment>
      <div>
        <HomeCarousel isCarouselLoading={false} />
      </div>
      <div>
        <HomeCategory isCategoryLoading={false} />
      </div>
    </Fragment>
  );
};

export default Home;
