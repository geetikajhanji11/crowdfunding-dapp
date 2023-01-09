import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { startFundRaising } from '../redux/interactions'
import { useDispatch, useSelector } from 'react-redux'
import { etherToWei } from '../helper/helper'
import { toastSuccess,toastError } from '../helper/toastMessage'

const FundRiserForm = () => {

    const crowdFundingContract = useSelector(state=>state.fundingReducer.contract)
    const account = useSelector(state=>state.web3Reducer.account)
    const web3 = useSelector(state=>state.web3Reducer.connection)

    const dispatch = useDispatch()

    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [image,setImage] = useState("")
    const [targetedContributionAmount,setTargetedContributionAmount] = useState("")
    const [minimumContributionAmount,setMinimumContributionAmount] = useState("")
    const [deadline,setDeadline] = useState("")
    const [btnLoading,setBtnLoading] = useState(false)


    const riseFund = (e) =>{
       e.preventDefault();
       setBtnLoading(true)
       const unixDate = moment(deadline).valueOf()

       const onSuccess = () =>{
        setBtnLoading(false)
        setTitle("")
        setDescription("")
        setImage("")
        setTargetedContributionAmount("")
        setMinimumContributionAmount("")
        setDeadline("")
        toastSuccess("Fund raising has started 🎉");
      }

       const onError = (error) =>{
         setBtnLoading(false)
         toastError(error);
       }

       const data = {
        minimumContribution:etherToWei(minimumContributionAmount),
        deadline:Number(unixDate),
        targetContribution:etherToWei(targetedContributionAmount),
        projectTitle:title,
        projectDesc:description,
        image:image,
        account:account
       }

       startFundRaising(web3,crowdFundingContract,data,onSuccess,onError,dispatch)
    }

  return (
    <>
        <h1 className="font-serif font-bold text-3xl mb-5 text-center text-[#FFC045]">
            Create Campaign
        </h1>
        <form onSubmit={(e)=>riseFund(e)}>

            <div className="form-control my-1">
                <label className="input-label">
                    Title :
                </label>
                <input type="text" placeholder="Write your campaign title here..." className="form-control-input border-neutral-400 focus:ring-neutral-200" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
            </div>

            <div className="form-control my-1">
                <label className="input-label">
                    Description :
                </label>
                <textarea placeholder="Write your campaign description here..." className="form-control-input border-neutral-400 focus:ring-neutral-200" value={description} onChange={(e)=>setDescription(e.target.value)} required></textarea>
            </div>

            {/* IMAGE */}
            <div className="form-control my-1">
                <label className="input-label">
                    Image URL :
                </label>
                <input type="text" placeholder="Write your image URL here..." className="form-control-input border-neutral-400 focus:ring-neutral-200" value={image} onChange={(e)=>setImage(e.target.value)} required/>
            </div>

            <div className="form-control my-1">
                <label className="input-label">
                    Targeted contribution amount :
                </label>
                <input type="number" placeholder="Eg. 5.0 ETH" className="form-control-input border-neutral-400 focus:ring-neutral-200" value={targetedContributionAmount} onChange={(e)=>setTargetedContributionAmount(e.target.value)} required/>
            </div>

            <div className="form-control my-1">
                <label className="input-label">
                    Minimum contribution amount :
                </label>
                <input type="number" placeholder="Eg. 0.001 ETH" className="form-control-input border-neutral-400 focus:ring-neutral-200" value={minimumContributionAmount} onChange={(e)=>setMinimumContributionAmount(e.target.value)} required/>
            </div>

            <div className="form-control date-picker my-1">
                <label className="input-label">
                    Deadline :
                </label>
                <input type="date" placeholder="dd-mm-yyyy" className="form-control-input border-neutral-400 focus:ring-neutral-200" value={deadline} onChange={(e)=>setDeadline(e.target.value)} required/>
            </div>

            {/* SUBMIT BUTTON */}
            <button className="p-2 w-full bg-[#FFC045] font-bold text-white rounded-md hover:bg-[#FFB200]" disabled={btnLoading} >
                {btnLoading?"Loading...":"Raise Funds Now!"}
            </button>
        </form>
    </>
  )
}

export default FundRiserForm