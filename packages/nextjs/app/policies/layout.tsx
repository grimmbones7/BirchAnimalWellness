import { ReactNode } from "react";
import Disclaimer from "~~/components/Disclaimer";
import { Footer } from "~~/components/Footer";

interface LayoutProps {
  children: ReactNode;
}

const ContactLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <main>{children}</main>
      <Disclaimer />
      <Footer />
    </>
  );
};

export default ContactLayout;
