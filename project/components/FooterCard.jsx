import React from "react";

export default function FooterCard(props) {
    return (
        <div className='img-div'>
            <a target="_blank" href={props.url}>
                <img
                    src={props.src}
                    alt={props.alt} /></a>
        </div>
    )
}
