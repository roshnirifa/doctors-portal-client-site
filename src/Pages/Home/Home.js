import React from 'react';
import Banner from './Banner/Banner';
import DentalCareBanner from './DentalCareBanner/DentalCareBanner';
import Info from './Info/Info';
import MakeAppoitment from './MakeAppoitment/MakeAppoitment';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='px-24'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalCareBanner></DentalCareBanner>
            <MakeAppoitment></MakeAppoitment>
        </div>
    );
};

export default Home;