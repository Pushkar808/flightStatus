import React from 'react'

export const Header = () => {
    return (
        <div className='border-b-4 py-4 border-black flex justify-between items-center'>
            <div>
                <img src="/images/logo.jpg" alt="logo" width={150} height={200} />
            </div>
            <div>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scale(1.5)' }}>
                    <g id="Menu_Fries">
                        <path
                            d="M20.437,19.937c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002Z"></path>
                        <path
                            d="M20.437,11.5c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l10,-0.001Z"></path>
                        <path
                            d="M20.437,3.062c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001Z"></path>
                    </g>
                </svg>
            </div>
        </div>
    )
}
