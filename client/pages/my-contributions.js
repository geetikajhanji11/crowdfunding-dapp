import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'
import authWrapper from '../helper/authWrapper'
import { getMyContributionList } from '../redux/interactions'
import Link from "next/link";

const MyContributions = () => {

    const crowdFundingContract = useSelector(state=>state.fundingReducer.contract)
    const account = useSelector(state=>state.web3Reducer.account)

    const [contributions, setContributions] = useState(null)

    useEffect(() => {
        (async() => {
            if(crowdFundingContract){
                var res = await getMyContributionList(crowdFundingContract,account)
                console.log(res)
                setContributions(res)
            }
        })();

        console.log(contributions)

    }, [crowdFundingContract])

  return (
    <div className="px-2 py-4 flex flex-wrap lg:px-12 lg:flex-row ">
        {
          contributions?
            contributions.length > 0?
                contributions.map((data,i)=>(

                    <div className='my-contributions' key={i}>
                        <div className='lg:w-1/5 mr-2'>
                            <div className='p-6 w-8 h-8 mx-auto my-auto rounded-md bg-white '></div>
                        </div>
                        <div className='lg:w-4/5'>
                            <Link href={`/project-details/${data.projectAddress}`}><p className='text-md font-bold text-[#E8F9FD] w-40 truncate cursor-pointer '>{data.projectAddress}</p></Link>
                            <p className='text-sm font-bold text-[#0A91AB]'>{data.amount} ETH</p>
                        </div>
                    </div>
                ))
            :
            <p className='text-2xl font-bold text-[#E8F9FD] text-center font-sans'>You haven't contributed in any project yet!</p>
        :
        <div className="w-full"> <Loader/></div>
       
        }
    </div>
  )
}

export default authWrapper(MyContributions)