import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Pathologists from '../Pathologists/Pathologists';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Pathologists></Pathologists>
        </div>
    );
};

export default Home;