import React from "react";
import type { NextPage } from "next";

const PoliciesSection: NextPage = () => {
  return (
    <div className="mt-10 card bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 p-8">
              <h2 className="text-3xl font-semibold mb-4">Payment Policy</h2>
            </div>
            <div className="md:w-2/3 p-8 flex flex-col justify-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliciesSection;
