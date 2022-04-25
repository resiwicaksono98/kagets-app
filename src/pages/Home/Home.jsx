import React from 'react';
import homeImg from '../../assets/images/homeBg.jpg'
import bg from '../../assets/images/bg.jpeg'

const Home = () => {
    return (
        <div>
            <div>
                <img src={homeImg} alt="homeImg" className='lg:w-2/4 rounded-lg' />
            </div>
        </div>
    );
}

export default Home;
