import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const DogServicesLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className="container mx-auto py-16">{children}</main>
    </>
  );
};

export default DogServicesLayout;
