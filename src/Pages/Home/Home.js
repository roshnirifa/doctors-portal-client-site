import React from 'react';
import Banner from './Banner/Banner';
import DentalCareBanner from './DentalCareBanner/DentalCareBanner';
import Info from './Info/Info';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='px-24'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalCareBanner></DentalCareBanner>
        </div>
    );
};

export default Home;