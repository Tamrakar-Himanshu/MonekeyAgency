import React from "react";
import googlecloud from "../assets/googlecloud.png";
import nvidia from "../assets/nvidia.png";
import salesforcce from "../assets/salesforcce.png";

const Associations = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 border-t border-b border-dotted border-blue-400">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">
        Our Associations
      </h2>
      <div className="flex items-center justify-center space-x-40">
        <img src={googlecloud} alt="Google Cloud" className="h-[5rem]" />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
          alt="AWS"
          className="h-10"
        />
        <img src={salesforcce} alt="Salesforce" className="h-12" />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"
          alt="SAP"
          className="h-10"
        />
        <img src={nvidia} alt="NVIDIA" className="h-16" />
      </div>
    </div>
  );
};

export default Associations;
