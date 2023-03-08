import React from 'react'
import FooterData from './FooterData'

import { Link } from 'react-router-dom'
import FooterCard from './FooterCard'
export default function Footer() {
    return (
        <>
            <div className='footer-div text-center'>
                <div>
                    Follow Me
                </div>
                {FooterData.map((data, ind) => {
                    return <FooterCard
                        key={ind}
                        url={data.url}
                        src={data.src}
                        alt={data.alt}
                    />
                })}

            </div>
            <div className='footer-text text-center'>
                All rights reserved &copy; 2023
            </div>
        </>
    )
}
