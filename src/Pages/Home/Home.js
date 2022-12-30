import React from 'react';
import RightSide from '../../Components/RightSide/RightSide';
import LeftSide from '../../Components/Shared/LeftSide';
import HomeSectionOne from './HomeSectionOne';
import HomeSectionTwo from './HomeSectionTwo';
const Home = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 ">
        <div className='mt-5 hidden lg:block'><LeftSide></LeftSide></div>
            <div className="col-span-3 m-5"><HomeSectionOne></HomeSectionOne>
            <HomeSectionTwo></HomeSectionTwo></div>
        
            
            <div  className=' mt-5'>
           
                <RightSide></RightSide>
                
        </div>
      </div>
    );
};

export default Home;