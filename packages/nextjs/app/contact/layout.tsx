import { ReactNode } from "react";
import { Footer } from "~~/components/Footer";

interface LayoutProps {
  children: ReactNode;
}

const ContactLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default ContactLayout;
