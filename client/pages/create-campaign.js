import React from "react";
import authWrapper from "../helper/authWrapper";
import FundRiserForm from "../components/FundRiserForm";
import { useSelector } from "react-redux";
import FundRiserCard from "../components/FundRiserCard";
import Loader from "../components/Loader";

const CreateCampaign = () => {

  return (
    <div className="px-2 py-4 flex flex-col lg:px-12 lg:flex-row ">
      <div className="card lg:w-5/12 h-fit my-4 m-auto">
          <FundRiserForm/>
      </div>
    </div>
  );
};

export default authWrapper(CreateCampaign);
