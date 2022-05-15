import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl mb-5 pb-8">
            <div class="card-body">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit placeat ipsam cum exercitationem optio velit magnam ducimus inventore officiis quidem.</p>
            </div>
            <div className='flex items-center pl-8'>
                <div class="avatar">
                    <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={review.img} alt='' />
                    </div>
                </div>
                <div className='pl-4'>
                    {review.name}
                    <div>
                        {review.location}
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Review;