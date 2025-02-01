import {
  Avatar,
  Button,
  ButtonProps,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Navbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { IoSearchSharp } from "react-icons/io5";
import { BUTTON_ITEMS } from "../LandingPageLayoutConstants";
import { signOut, useSession } from "next-auth/react";
import { Fragment, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import LandingPageLayoutNavbarMobile from "./LandingPageLayoutNavbarMobile";
import { MdOutlineMailOutline, MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineBell } from "react-icons/ai";

const LandingPageLayoutNavbar = () => {
  const session = {
    status: "authenticated",
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-red-600">
      <div className="block lg:hidden">
        <LandingPageLayoutNavbarMobile
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
      <Navbar
        className=""
        isBlurred={false}
        maxWidth="full"
        position="static"
        onMenuOpenChange={setIsMenuOpen}
        shouldHideOnScroll
      >
        <Image
          className="hidden cursor-pointer lg:flex"
          src={"/images/general/logo-white2.svg"}
          alt="logo"
          width={200}
          height={200}
        />
        <NavbarContent
          justify="center"
          className="w-full gap-2 md:gap-4 lg:w-3/4"
        >
          <Input
            classNames={{
              input: ["placeholder:text-gray-500 text-md"],
            }}
            isClearable
            className="mr-4 w-full"
            placeholder="Search"
            variant="faded"
            startContent={<IoSearchSharp className="text-xl text-gray-500" />}
            onClear={() => {}}
            onChange={() => {}}
          />
          {session.status === "authenticated" ? (
            <div className="hidden flex-row gap-4 md:flex">
              <MdOutlineShoppingCart className="text-2xl text-white md:text-3xl" />
              <AiOutlineBell className="text-2xl text-white md:text-3xl" />
              <MdOutlineMailOutline className="text-2xl text-white md:text-3xl" />
            </div>
          ) : (
            <div className="hidden flex-row gap-4 md:flex">
              <MdOutlineShoppingCart className="text-2xl text-white md:text-3xl" />
            </div>
          )}
          <div className="hidden h-8 rounded-lg border-l-3 border-white lg:flex"></div>
          <Button
            className="hover:!bg-transparent lg:hidden"
            size="sm"
            variant="light"
            onPress={() => setIsMenuOpen(true)}
          >
            <RxHamburgerMenu className="text-2xl text-white" />
          </Button>
        </NavbarContent>
        <NavbarContent justify="end">
          {session.status === "authenticated" ? (
            <NavbarItem className="hidden lg:block">
              <div
                className="flex"
                onMouseEnter={() => setIsOpen(!isOpen)}
                onMouseLeave={() => setIsOpen(!isOpen)}
              >
                <Dropdown isOpen={isOpen}>
                  <DropdownTrigger>
                    <Button
                      className="lg:flex lg:flex-row lg:items-center lg:gap-2"
                      variant="light"
                    >
                      <Avatar
                        color="default"
                        src="/images/general/user-logo.pn"
                        className="cursor-pointer"
                        showFallback
                      />
                      <h2 className="font-semibold uppercase text-white">
                        Name
                      </h2>
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu>
                    <DropdownItem key={"profile"} href="/user/account/profile">
                      My Profile
                    </DropdownItem>
                    <DropdownItem key={"order"} href="/user/purchase">
                      My Orders
                    </DropdownItem>
                    <DropdownItem key={"signout"} onPress={() => signOut()}>
                      Sign Out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </NavbarItem>
          ) : (
            <div className="hidden lg:flex lg:gap-2">
              {BUTTON_ITEMS.map((item) => (
                <NavbarItem key={`button-${item.label}`}>
                  <Button
                    as={Link}
                    className={item.className}
                    href={item.href}
                    variant={item.variant as ButtonProps["variant"]}
                  >
                    {item.label}
                  </Button>
                </NavbarItem>
              ))}
            </div>
          )}
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default LandingPageLayoutNavbar;
