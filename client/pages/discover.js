import React from "react";
import authWrapper from "../helper/authWrapper";
import { useSelector } from "react-redux";
import FundRiserCard from "../components/FundRiserCard";
import Loader from "../components/Loader";
import Head from 'next/head'

const Discover = () => {

  const projectsList = useSelector(state=>state.projectReducer.projects)

  return (
    <div className="px-2 py-4 flex flex-col lg:px-12 lg:flex-row ">

    <Head>
      <title>Crowdfunding DAPP</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Dancing+Script:wght@700&display=swap" rel="stylesheet"></link>
    </Head>

      <div className="lg:w-7/12 my-2 lg:my-0 lg:mx-2">
        {projectsList !== undefined?
          projectsList.length > 0 ?
            projectsList.map((data, i) => (
              <FundRiserCard props={data} key={i}/>
            ))
          :
          <h1 className="text-2xl font-bold text-[#E8F9FD] text-center font-sans">No Projects found!</h1>
        :
        <Loader/>
      }
      </div>

      <div className="slogan-container content-center flex-1">
        <h1 className="text-8xl">
          <span>Donate</span> <br></br>
          <span className="yellow">Support</span> <br></br>
          <span>Impact</span> <br></br>
        </h1>
      </div>
    </div>
  );
};

export default authWrapper(Discover);
