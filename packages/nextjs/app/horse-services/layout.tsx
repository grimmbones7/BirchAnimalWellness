import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const HorseServicesLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className="container mx-auto py-16">
        <div className="flex items-center bg-cover justify-center h-30 bg-gray-800 rounded-lg mb-8"></div>
        {children}
      </main>
    </>
  );
};

export default HorseServicesLayout;
