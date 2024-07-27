import React from 'react'
import { Link } from 'react-router-dom'

export const Splash = () => {
    return (
        <div className='relative h-full bg-repeat bg-[#202f62]/100 px-[20px]'>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("images/splash.png")' }} />
            <div className="relative z-10 text-white flex flex-col items-center">
                <div className='mt-[50px] mx-auto'>
                    LOGO
                </div>
                <div>
                    <h1 className='font-bold text-[35px] capitalize'>fly without any worry for delay</h1>
                    <h4 className='text-slate-400 text-[15px]'>Search,Track,Notify</h4>
                </div>
                <div className='animate__animated animate__bounceInRight'>
                    <img src="/images/aeroplane.svg" alt='aeroplane' width={450} />
                </div>
                <Link className='w-full text-center' to="/flightSearch">
                    <div className='bg-[#3059eb] w-full p-4 rounded hover:bg-[#4669e3] text-white'>Get Started</div>
                </Link>
            </div>

        </div>
    )
}
