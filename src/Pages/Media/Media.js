import React from 'react';
import LeftSide from '../../Components/Shared/LeftSide';
import MediaInfo from './MediaInfo';

const Media = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-5">
        <div className='mt-5 hidden lg:block'><LeftSide></LeftSide></div>
            <div className="col-span-4 m-5"><MediaInfo></MediaInfo></div>
        
            
            
      </div>
    );
};

export default Media;