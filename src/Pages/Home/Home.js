import React from 'react';
import Services from '../Appoinment/Services/Services';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import DentalCareBanner from './DentalCareBanner/DentalCareBanner';
import Info from './Info/Info';
import MakeAppoitment from './MakeAppoitment/MakeAppoitment';

import Testimonial from './Testimonials/Testimonial';

const Home = () => {
    return (
        <div className='px-24'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalCareBanner></DentalCareBanner>
            <MakeAppoitment></MakeAppoitment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;