import React from 'react';
import quotes from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from '../Review/Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            description: "",
            img: people1,
            location: "California"

        },
        {
            _id: 2,
            name: "Winson Peter",
            description: "",
            img: people2,
            location: "California"

        },
        {
            _id: 3,
            name: "Alex Herry",
            description: "",
            img: people3,
            location: "California"

        }

    ]
    return (
        <section className='mt-[55px]'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-primary text-xl font-bold'>Testimonial</h3>
                    <h2 className='text-3xl'>What Our Customer Says</h2>
                </div>
                <div>
                    <img className='lg:w-48 w-24' src={quotes} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    >

                    </Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;