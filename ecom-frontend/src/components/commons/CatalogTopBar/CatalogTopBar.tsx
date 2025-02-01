import { ReactNode } from "react";
import PageHead from "../PageHead/PageHead";
import Image from "next/image";
import { Button, Divider, Input } from "@nextui-org/react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { IoCartOutline, IoSearchSharp } from "react-icons/io5";
import { useRouter } from "next/router";

interface PropTypes {
  isLogin: boolean;
  isOpen: boolean;
}
const CatalogTopBarLayout = (props: PropTypes) => {
  const router = useRouter();
  const { isLogin, isOpen } = props;
  return (
    <div className="px-4 py-2">
      <div className="flex w-full flex-col">
        <div className="flex justify-between gap-4">
          <p className="mx-2 grow">Contact Us</p>
          <p className="mx-2">About Us</p>
          <p className="mx-2">Start Selling</p>
          <p className="mx-2">Promo</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <Image
            src={"/images/general/logo.svg"}
            alt="logo"
            width={100}
            height={100}
            onClick={() => router.push("/")}
          />
          <h1>Category</h1>
          <Input startContent={<IoSearchSharp className="text-xl" />} />
          <Button variant="light" size="md">
            {<IoCartOutline className="text-2xl" />}
          </Button>
          <div className="">
            {isLogin ? (
              <div>
                <p>Login True</p>
              </div>
            ) : (
              <div className="flex gap-2">
                <Button className="font-bold text-red-600" variant="bordered">
                  SignUp
                </Button>
                <Button
                  className="bg-red-600 font-bold text-white"
                  variant="solid"
                >
                  SignIn
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center gap-4 text-center">
          <p>Item1</p>
          <p>Item2</p>
          <p>Item3</p>
          <p>Item4</p>
        </div>
      </div>
    </div>
  );
};

export default CatalogTopBarLayout;
