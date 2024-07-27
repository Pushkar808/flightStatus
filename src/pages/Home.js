import React from 'react'
import { Link } from 'react-router-dom'
import { Ticket } from '../components/Ticket'

export const Home = () => {
    return (
        <div className='bg-gray-200'>
            <div className='h-[300px] rounded-b-[30px] relative bg-repeat bg-[#202f62]/100 px-[20px]'>
                <div className="absolute inset-0 opacity-10 rounded-b-[30px]" style={{ backgroundImage: 'url("images/splash.png")' }} />
                {/* <div className='absolute h-[350px] -bottom-32 w-96 bg-white rounded-lg px-5 pt-24 '> */}
                <div className='absolute -bottom-28 w-96 bg-white rounded-lg px-5 py-8'>
                    LOGO
                    <h1 className='pb-2 px-1'>Search Flight by Flight Number </h1>
                    <form className='flex flex-col gap-2'>
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
                            <input id="text" class=" pl-2 w-full outline-none border-none" type="text" name="text" placeholder="Flight Number Goes Here" />
                        </div>
                        <Link className='w-full text-center mt-2' to="/flightSearch">
                            <div className='bg-[#3059eb] w-full p-4 rounded hover:bg-[#4669e3] text-white'>Get Started</div>
                        </Link>
                    </form>
                </div>

            </div>
            <div className='pt-36 px-[20px] h-full'>
                <h5 className='font-bold'>Flight Info</h5>
                <Ticket />
            </div>
        </div>
    )
}
