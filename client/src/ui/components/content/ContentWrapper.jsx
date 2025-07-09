import React from 'react'

export default function ContentWrapper({ children }) {
    return (
        <div
            id="content-container"
            className="absolute w-full h-full z-10 flex justify-center overflow-hidden bg-none"
        >
            <div
                id="wrapper"
                className="flex flex-col w-full h-full relative"
            >
                {children}
            </div>
        </div>
    )
}
