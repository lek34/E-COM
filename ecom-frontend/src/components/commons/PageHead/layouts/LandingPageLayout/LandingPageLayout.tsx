import { Fragment, ReactNode } from "react";
import PageHead from "../../PageHead";
import LandingPageLayoutNavbar from "./LandingPageLayoutNavbar";
import LandingPageLayoutFooter from "./LandingPageLayoutFooter";

interface PropTypes {
  title?: string;
  children: ReactNode;
}

const LandingPageLayout = (props: PropTypes) => {
  const { children, title } = props;
  return (
    <div>
      <PageHead title={title} />
      <LandingPageLayoutNavbar />
      <div className="max-w-screen-3xl 3xl:container justify-center py-10 pt-24 lg:px-32">
        {children}
      </div>
      <LandingPageLayoutFooter />
    </div>
  );
};

export default LandingPageLayout;
