import React from 'react'
import { Link } from 'react-router-dom'

export const Splash = () => {
    return (
        <div className='relative h-full bg-repeat bg-[#2c3a9b]/100 px-[20px]'>
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'url("images/splash.png")',
                backgroundPosition: 'center',
                backgroundSize: 'contain'
            }} />
            <div className="relative z-10 text-white flex flex-col h-full justify-between">
                <div className='mt-[50px] mx-auto'>
                    <img src="/images/logo2.jpg" width={120} />
                </div>
                <div className='text-center'>
                    <h1 className='mt-4 mb-4 font-semibold leading-[1.3em] text-[30px] capitalize'>Flight Status at Your Fingertips!</h1>
                    <h4 className='text-[15px]'>Search,Track,Notify</h4>
                </div>
                <div className='animate__animated animate__bounceInRight'>
                    {/* <img src="/images/aeroplane.svg" alt='aeroplane' width={450} /> */}
                    <img src="/images/airplane.png" alt='aeroplane' width={700} />
                </div>
                <Link className='w-full text-center mb-5' to="/flightSearch">
                    <div className='bg-[#3059eb] w-full p-4 rounded-full text-[16px] font-semibold hover:bg-[#4669e3] text-white'>Let's Fly</div>
                </Link>
            </div>

        </div>
    )
}
