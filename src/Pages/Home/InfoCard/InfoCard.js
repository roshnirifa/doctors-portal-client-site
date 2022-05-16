import React from 'react';

const InfoCard = ({ img, cardTitle, bgColor }) => {
    return (
        <div class={`card lg:card-side  shadow-xl px-12 ${bgColor}`} >
            <figure className='pl-5 pt-4'>
                <img src={img} alt="Album" />
            </figure>
            <div class="card-body text-white pt-5">
                <h2 class="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;