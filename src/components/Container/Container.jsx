import React from 'react';

import Center from '../Center/Center';
import About from '../About/About';
import Info from '../Info/Info';
import MobileContact from '../MobileContact/MobileContact';
import Map from '../Map/Map';

const Container = () => (
    <div className='container'>
        <Center />
        <About />
        <Info />
        <MobileContact />
        <Map />
    </div>
);

export default Container;