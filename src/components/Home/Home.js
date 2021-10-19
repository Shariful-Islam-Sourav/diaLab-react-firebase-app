import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Pathologists from '../Pathologists/Pathologists';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <About></About>
            <Pathologists></Pathologists>
        </div>
    );
};

export default Home;