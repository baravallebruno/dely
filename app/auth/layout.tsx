import React from "react";
import { LayoutProps } from "../layout";
import Image from "next/image";
import authImage from "@/public/assets/food-bg.png";
import DelyLogo from "@/components/ui/DelyLogo";
import RoundedDivider from "@/components/ui/RoundedDivider";

const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <div className="grid grid-cols-8 w-full h-screen">
      <section className="p-8 invisible lg:visible lg:col-span-4 relative flex items-center justify-center">
        <RoundedDivider className="absolute fill-white h-full right-0 z-10" />
        <DelyLogo className="fill-dely-primary z-10" />
        <Image
          src={authImage}
          alt="Auth Image"
          fill
          objectFit="cover"
        />
      </section>
      <section className="p-8 lg:col-span-4">{children}</section>
    </div>
  );
};

export default AuthLayout;
