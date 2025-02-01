import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const NAV_ITEMS = [{ label: "Home", href: "/" }];

const BUTTON_ITEMS = [
  {
    className: "font-bold text-white bg-red-600",
    label: "SignUp",
    href: "/auth/register",
    variant: "bordered",
  },
  {
    className: "bg-white font-bold text-red-600",
    label: "SignIn",
    href: "/auth/login",
    variant: "solid",
  },
];

const SOCIAL_ITEMS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: <FaFacebook />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: <FaInstagram />,
  },
  {
    label: "Twitter",
    href: "https://www.x.com/",
    icon: <FaTwitter />,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/",
    icon: <FaTiktok />,
  },
];

export { BUTTON_ITEMS, SOCIAL_ITEMS };
