import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';
export const Ticket = ({ data }) => {
    const getStatusstyle = (fStatus) => {
        switch (fStatus) {
            case "ontime":
                return "text-green-500";
            case "cancelled":
                return "text-red-500";
            case "delayed":
                return "text-yellow-500 animate-pulse";
            default:
                return "text-gray-500";
        }
    }
    return (
        <div class="flex flex-col items-center justify-center animate__animated animate__fadeInUp">
            <div class="max-w-md w-full h-full mx-auto z-10 rounded-3xl">
                <div class="flex flex-col">
                    <div class="bg-white relative drop-shadow-2xl  rounded-3xl p-4 m-4">
                        <div class="flex-none sm:flex">
                            <div class=" relative h-32 w-32 sm:mb-0 mb-3 hidden">
                                <img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" class=" w-32 h-32 object-cover rounded-2xl" />
                                <div href="#"
                                    class="absolute -right-2 bottom-2 -ml-3  text-white p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        class="h-4 w-4">
                                        <path
                                            d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div class="flex-auto justify-evenly">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center  my-1">
                                        <span class="mr-3 rounded-full bg-white w-8 h-8">
                                            <img src="https://image.winudf.com/v2/image1/Y29tLmJldHMuYWlyaW5kaWEudWlfaWNvbl8xNTU0NTM4MzcxXzA0Mw/icon.png?w=&amp;fakeurl=1" class="h-8 p-1" alt="" />
                                        </span>
                                        <h2 class="font-medium capitalize">{data?.airline}</h2>
                                    </div>
                                    <div class="ml-auto text-blue-800">{data?.flight_id}</div>
                                </div>
                                {/* <div class="border-b border-dashed border-b-2 my-5"></div>
                                <div class="flex items-center">
                                    <div class="flex flex-col">
                                        <div class="flex-auto text-xs text-gray-400 my-1">
                                            <span class="mr-1 ">MO</span><span>19 22</span>
                                        </div>
                                        <div class="w-full flex-none text-lg text-blue-800 font-bold leading-none">COK</div>
                                        <div class="text-xs">Cochi</div>

                                    </div>
                                    <div class="flex flex-col mx-auto">
                                        <img src="https://image.winudf.com/v2/image1/Y29tLmJldHMuYWlyaW5kaWEudWlfaWNvbl8xNTU0NTM4MzcxXzA0Mw/icon.png?w=&amp;fakeurl=1" class="w-20 p-1" />
                                    </div>
                                    <div class="flex flex-col ">
                                        <div class="flex-auto text-xs text-gray-400 my-1">
                                            <span class="mr-1">MO</span><span>19 22</span>
                                        </div>
                                        <div class="w-full flex-none text-lg text-blue-800 font-bold leading-none">DXB</div>
                                        <div class="text-xs">Dubai</div>

                                    </div>
                                </div> */}
                                <div class="border-b border-dashed border-b-2 pt-5" >
                                </div>
                                <div class="flex items-center mb-5 p-5 text-sm">
                                    <div class="flex flex-col">
                                        <span class="text-sm">Departure Gate</span>
                                        <div class="font-semibold">{data?.departure_gate}</div>

                                    </div>
                                    <div class="flex flex-col ml-auto">
                                        <span class="text-sm">Arrival Gate</span>
                                        <div class="font-semibold text-right">{data?.arrival_gate}</div>

                                    </div>
                                </div>
                                <div class="flex items-center mb-4 px-5">
                                    <div class="flex flex-col text-sm">
                                        <span class="">Board</span>
                                        <div class="font-semibold">{moment(data?.scheduled_departure).format("LT")}</div>

                                    </div>
                                    <div class="flex flex-col mx-auto text-sm">
                                        <span class="">Flight Status</span>
                                        <div class={`font-semibold text-center capitialize capitalize ${getStatusstyle(data?.status)}`}>{data?.status}</div>

                                    </div>
                                    <div class="flex flex-col text-sm">
                                        <span class="text-right">Arrival</span>
                                        <div class="font-semibold">{moment(data?.scheduled_arrival).format("LT")}</div>

                                    </div>
                                </div>
                                <div class="border-b border-dashed border-b-2 pt-5" />
                                <div class="flex items-center p-5 text-sm">
                                    <Link className='w-full text-center mt-2' to="/flightSearch">
                                        <div className='flex gap-2 bg-[#3059eb] justify-center w-full p-4 rounded hover:bg-[#4669e3] text-white'>
                                            <span>Get Alerts</span>
                                            <img src="/images/bell-regular.svg" width={15} height={15} alt="" />
                                        </div>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
