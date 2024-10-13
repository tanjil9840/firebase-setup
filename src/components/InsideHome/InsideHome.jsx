import React, { useContext } from 'react';
import { homeContext } from '../Root/Home/Home';

const InsideHome = () => {
    const homeData= useContext(homeContext)
    console.log(homeData)
    return (
        <div>
            
        </div>
    );
};

export default InsideHome;