import React, { useState } from 'react'
import { Ticket } from '../components/Ticket'
import { useDispatch } from 'react-redux'
import { searchData } from '../store/action/commonAction'

export const Home = () => {
    const dispatch = useDispatch();
    const [flightNumber, setFlightNumber] = useState("");
    const [flightData, setFlightData] = useState([]);
    const getFlightdata = () => {
        if (flightNumber !== "")
            dispatch(searchData({ flightNumber: flightNumber }, (res) => { setFlightData(res) }))
        else
            setFlightData([]);
    }
    return (
        <div className='bg-gray-200 h-full'>
            <div className='h-[300px] rounded-b-[16px] relative bg-repeat bg-[#202f62]/100 px-[20px]'>
                <div className="absolute inset-0 opacity-10 rounded-b-[16px]" style={{
                    backgroundImage: 'url("images/splash.png")',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain'
                }} />
                {/* <div className='absolute h-[350px] -bottom-32 w-96 bg-white rounded-lg px-5 pt-24 '> */}
                <div className='absolute -bottom-28 w-[410px] bg-white rounded-lg px-5 py-6'>
                    <div className='flex justify-center'>
                        <img src="/images/logo2.jpg" width={120} height={80} className='rounded' alt="logo" />
                    </div>
                    <h1 className='pb-2 px-1 py-5 text-[14px]'>Search Flight by Flight Number </h1>
                    <div className='flex flex-col gap-2'>
                        {/* <div className='relative border-2 rounded-2xl px-2'>
                            <div class="flex items-center py-2 px-3">
                                <img src="/images/plane-departure-solid.svg" width={20} height={20} class="h-5 w-5 text-gray-400 mr-1" alt="" />
                                <input id="email" class=" pl-1 w-full outline-none border-none pr-[50px]" type="email" name="email" placeholder="Email Address1" />
                            </div>
                            <hr className='w-[270px]' />
                            <div className='p-2 absolute right-5 top-5 border border-blue-500 cursor-pointer rounded-xl rotate-90 hover:shadow-md'>
                                <img src="/images/right-left-solid.svg" alt="swapIcon" width={20} height={20} />
                            </div>
                            <div class="flex items-center py-2 px-3">
                                <img src="/images/plane-arrival-solid.svg" width={20} height={20} class="h-5 w-5 text-gray-400 mr-1" alt="" />
                                <input id="email" class=" pl-1 w-full outline-none border-none pr-[50px]" type="email" name="email" placeholder="Email Address2" />
                            </div>
                        </div> */}
                        <div class="flex items-center border-2 py-2 px-3 rounded-xl">
                            <img src="/images/plane-arrival-solid.svg" width={20} height={20} class="h-5 w-5 text-gray-400 mr-1" alt="" />
                            <input id="text" class=" pl-2 w-full outline-none border-none" type="text" name="text" placeholder="Flight Number Goes Here" onChange={(e) => setFlightNumber(e.target.value)} />
                        </div>
                        <div className='w-full text-center mt-2 cursor-pointer' onClick={getFlightdata} >
                            <div className='bg-[#3059eb] w-full p-4 rounded hover:bg-[#4669e3] text-white'>Search</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='pt-36 px-[20px] bg-gray-200 '>
                <h5 className='font-bold'>Flight Info</h5>
                {
                    flightData?.length !== 0 ?
                        flightData?.map((flight) => {
                            return <Ticket data={flight} />
                        }) :
                        <p>No Data Found</p>
                }
            </div>
        </div>
    )
}
