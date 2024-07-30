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
                <div className='absolute -bottom-28 md:w-[410px] w-[90%] bg-white rounded-lg px-5 py-6'>
                    <div className='flex justify-center'>
                        <img src="/images/logo2.jpg" width={120} height={80} className='rounded' alt="logo" />
                    </div>
                    <h1 className='pb-2 px-1 py-5 text-[14px]'>Search Flight by Flight Number </h1>
                    <div className='flex flex-col gap-2'>
                        <div className="flex items-center border-2 py-2 px-3 rounded-xl">
                            <img src="/images/plane-arrival-solid.svg" width={20} height={20} className="h-5 w-5 text-gray-400 mr-1" alt="" />
                            <input id="text" className=" pl-2 w-full outline-none border-none" type="text" name="text" placeholder="Flight Number Goes Here" onChange={(e) => setFlightNumber(e.target.value)} />
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
                        flightData?.map((flight, index) => {
                            return <Ticket data={flight} key={index} />
                        })
                        :
                        <p>Please seach to keep going...</p>
                }
            </div>
        </div>
    )
}
