import React from 'react'

export default function BodyWrapper({ children }) {
    return (
        <div id='body-wrapper' className='flex flex-col justify-between gap-1 md:h-full lg:pb-4'>{children}</div>
    )
}
