import Link from "next/link";
import type { NextPage } from "next";

const GoogleReviewSection: NextPage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center">
        <Link href="https://g.page/r/CXTtwkxM2e6YEAg/review">
          <button className="btn btn-lg w-full btn-accent">See More Testimonials on Google Reviews!</button>
        </Link>
      </div>
    </div>
  );
};

export default GoogleReviewSection;
