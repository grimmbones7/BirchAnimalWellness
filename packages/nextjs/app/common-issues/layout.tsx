import { ReactNode } from "react";
import { Footer } from "~~/components/Footer";

interface LayoutProps {
  children: ReactNode;
}

const CommonIssuesLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className="container mx-auto py-16">{children}</main>
      <Footer />
    </>
  );
};

export default CommonIssuesLayout;
