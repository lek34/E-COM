import Image from "next/image";
import Link from "next/link";
import { SOCIAL_ITEMS } from "../LandingPageLayoutConstants";

const LandingPageLayoutFooter = () => {
  return (
    <div className="flex flex-col items-center justify-between bg-slate-900 px-6 py-10 text-center lg:flex-row lg:text-left xl:p-20">
      <Image
        src={"/images/general/logo-white.svg"}
        alt="logo"
        className="mb-4 w-40 lg:mb-0 lg:w-60"
        width={200}
        height={100}
      />
      <div className="mb-4 flex flex-col gap-4 lg:mb-0">
        <div>
          <h4 className="text-xl text-white">Customer Service</h4>
          <p className="text-gray-600 hover:text-white">
            <Link href="#">crossbuy@buy.id</Link> | {""}
            <Link href="#">+62 123 456 789</Link>
          </p>
        </div>
        <div>
          <h4 className="text-xl text-white">Office</h4>
          <p className="text-gray-600 hover:text-white">
            <Link href="#">Orchard Rd 234</Link>
          </p>
        </div>
      </div>
      <div className="mb-10 flex flex-col gap-2 lg:mb-0">
        <h2 className="text-xl text-white">CrossBuy</h2>
        <Link className="text-gray-600 hover:text-white" href="#">
          Terms and Conditions
        </Link>
        <Link className="text-gray-600 hover:text-white" href="#">
          Flash Sale
        </Link>
        <Link className="text-gray-600 hover:text-white" href="#">
          Seller Center
        </Link>
      </div>
      <div className="item flex flex-col gap-8">
        <div className="flex items-center justify-between gap-8 text-gray-600">
          {SOCIAL_ITEMS.map((item) => (
            <Link
              href={item.href}
              className="text-3xl hover:text-white"
              key={`footer${item.label}`}
            >
              {item.icon}
            </Link>
          ))}
        </div>
        <p className="w-full text-center text-gray-600">
          Copyright © 2025 CrossBuy. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LandingPageLayoutFooter;
