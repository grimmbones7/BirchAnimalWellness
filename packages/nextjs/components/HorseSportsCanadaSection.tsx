import Link from "next/link";
import type { NextPage } from "next";

const HorseSportsCanadaSection: NextPage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center">
        <Link href="/">
          <button className="btn w-3/4 btn-accent">As Seen In Horse Sports Canada</button>
        </Link>
      </div>
    </div>
  );
};

export default HorseSportsCanadaSection;
