import { ReactNode } from "react";
import Disclaimer from "~~/components/Disclaimer";
import { Footer } from "~~/components/Footer";

interface LayoutProps {
  children: ReactNode;
}

const AboutMeLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className="container mx-auto py-16">{children}</main>
      <Disclaimer />
      <Footer />
    </>
  );
};

export default AboutMeLayout;
