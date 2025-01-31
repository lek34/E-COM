import {
  Button,
  ButtonProps,
  Divider,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Fragment } from "react";
import { BUTTON_ITEMS } from "../../LandingPageLayoutConstants";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { cn } from "@/utils/cn";
import { RxCross1 } from "react-icons/rx";
import { RiCustomerService2Fill, RiFileList3Line } from "react-icons/ri";
import { MdOutlineQrCodeScanner, MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineBell } from "react-icons/ai";
import { LuUserX } from "react-icons/lu";

interface PropTypes {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

const LandingPageLayoutNavbarMobile = (props: PropTypes) => {
  const { isMenuOpen, setIsMenuOpen } = props;
  const session = {
    status: "authenticated",
  };
  return (
    <div
      className={cn(
        "fixed z-50 flex h-screen w-full translate-y-full flex-col justify-between border-r-1 border-default-200 bg-white px-4 py-6 transition-all lg:relative lg:translate-y-0",
        { "translate-y-0": isMenuOpen },
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-row">
          <Button
            className="hover:!bg-transparent"
            size="sm"
            variant="light"
            onPress={() => setIsMenuOpen(false)}
          >
            <RxCross1 className="text-2xl text-red-800" />
          </Button>
          <h1 className="text-lg font-bold">Main Menu</h1>
        </div>
        <Divider />
        {session.status === "aauthenticated" ? (
          <Fragment>
            <h1>Hellow</h1>
          </Fragment>
        ) : (
          <div className="mx-4 flex gap-2">
            {BUTTON_ITEMS.map((item) => (
              <Button
                as={Link}
                className={`${item.className} grow`}
                href={item.href}
                key={item.label}
                variant={item.variant as ButtonProps["variant"]}
              >
                {item.label}
              </Button>
            ))}
          </div>
        )}
        <Divider />
        <div className="flex w-full flex-col">
          <Button
            className="w-full justify-start text-medium"
            radius="none"
            variant="light"
            startContent={<RiFileList3Line className="text-2xl" />}
          >
            Transaction
          </Button>
          <Button
            className="w-full justify-start text-medium"
            radius="none"
            variant="light"
            startContent={<MdOutlineShoppingCart className="text-2xl" />}
          >
            Cart
          </Button>
          <Button
            className="w-full justify-start text-medium"
            radius="none"
            variant="light"
            startContent={<AiOutlineBell className="text-2xl" />}
          >
            Notification
          </Button>
        </div>
        <Divider />
        <div className="flex w-full flex-col">
          <Button
            className="w-full justify-start text-medium"
            radius="none"
            variant="light"
            startContent={<RiCustomerService2Fill className="text-2xl" />}
          >
            Customer Service
          </Button>
          <Button
            className="w-full justify-start text-medium"
            radius="none"
            variant="light"
            startContent={<LuUserX className="text-2xl" />}
          >
            Complain
          </Button>
          <Button
            className="w-full justify-start text-medium"
            radius="none"
            variant="light"
            startContent={<MdOutlineQrCodeScanner className="text-2xl" />}
          >
            Scan QR Code
          </Button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default LandingPageLayoutNavbarMobile;
