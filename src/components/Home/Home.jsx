import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            This is home page :{data.length}!!
        </div>
    );
};

export default Home;