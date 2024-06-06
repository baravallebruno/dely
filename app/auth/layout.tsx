import React from "react";
import { LayoutProps } from "../layout";
import Image from "next/image";
import authImage from "@/public/assets/food-bg.png";
import DelyLogo from "@/components/ui/DelyLogo";
import RoundedDivider from "@/components/ui/RoundedDivider";
import Box from "../../components/ui/Box";

const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <Box className="grid grid-cols-8 w-full h-screen">
      <Box
        as="section"
        className="hidden lg:flex lg:col-span-4 relative"
      >
        <RoundedDivider
          position="right"
          className="p-8 flex items-center justify-center h-full w-full"
        >
          <Image
            src={authImage}
            alt="Auth Image"
            fill
            objectFit="cover"
          />
        </RoundedDivider>
      </Box>
      <Box
        as="section"
        className="p-8 col-span-8 lg:col-span-4 flex flex-col items-center justify-center"
      >
        <Box className="w-full sm:w-2/3 lg:w-96">
          <DelyLogo className="fill-dely-primary w-24 self-start mb-8" />
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AuthLayout;
