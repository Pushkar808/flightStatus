import React from 'react'
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
        <div className="flex flex-col items-center justify-center animate__animated animate__fadeInUp">
            <div className="max-w-md w-full h-full mx-auto z-10 rounded-3xl">
                <div className="flex flex-col">
                    <div className="bg-white relative drop-shadow-2xl  rounded-3xl p-4 m-4">
                        <div className="flex-none sm:flex">
                            <div className=" relative h-32 w-32 sm:mb-0 mb-3 hidden">
                                <img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" className=" w-32 h-32 object-cover rounded-2xl" />
                                <div href="#"
                                    className="absolute -right-2 bottom-2 -ml-3  text-white p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        className="h-4 w-4">
                                        <path
                                            d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex-auto justify-evenly">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center  my-1">
                                        <span className="mr-3 rounded-full bg-white w-8 h-8">
                                            <img src="/images/logo.png" className="h-8 p-1" alt="" />
                                        </span>
                                        <h2 className="font-medium capitalize">{data?.airline}</h2>
                                    </div>
                                    <div className="ml-auto text-blue-800">{data?.flight_id}</div>
                                </div>
                                <div className="border-b border-dashed border-b-2 pt-5" >
                                </div>
                                <div className="flex items-center mb-5 p-5 text-sm">
                                    <div className="flex flex-col">
                                        <span className="text-sm">Departure Gate</span>
                                        <div className="font-semibold">{data?.departure_gate}</div>

                                    </div>
                                    <div className="flex flex-col ml-auto">
                                        <span className="text-sm">Arrival Gate</span>
                                        <div className="font-semibold text-right">{data?.arrival_gate}</div>

                                    </div>
                                </div>
                                <div className="flex items-center mb-4 px-5">
                                    <div className="flex flex-col text-sm">
                                        <span className="">Board</span>
                                        <div className="font-semibold">{moment(data?.scheduled_departure).format("LT")}</div>

                                    </div>
                                    <div className="flex flex-col mx-auto text-sm">
                                        <span className="">Flight Status</span>
                                        <div className={`font-semibold text-center capitialize capitalize ${getStatusstyle(data?.status)}`}>{data?.status}</div>

                                    </div>
                                    <div className="flex flex-col text-sm">
                                        <span className="text-right">Arrival</span>
                                        <div className="font-semibold">{moment(data?.scheduled_arrival).format("LT")}</div>

                                    </div>
                                </div>
                                <div className="border-b border-dashed border-b-2 pt-5" />
                                {/* <div className="flex items-center p-5 text-sm">
                                    <Link className='w-full text-center mt-2' to="/flightSearch">
                                        <div className='flex gap-2 bg-[#3059eb] justify-center w-full p-4 rounded hover:bg-[#4669e3] text-white'>
                                            <span>Get Alerts</span>
                                            <img src="/images/bell-regular.svg" width={15} height={15} alt="" />
                                        </div>
                                    </Link>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
