import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import { AuthProvider } from "./auth/context";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "dely",
  description: "Deliveries made easy",
};

type LayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthProvider>
          <main className="flex flex-col items-center justify-center w-full">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
export type { LayoutProps };
