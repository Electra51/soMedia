import React, { useState } from 'react';
import img2 from '../../Assets/images/carouse2.PNG'
import img3 from '../../Assets/images/carousel3.PNG'
import img4 from '../../Assets/images/carousel4.PNG'
import { BsHandThumbsUp, BsHandThumbsUpFill } from 'react-icons/bs';
import moment from 'moment';

const RightSide = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked)
    setLiked(1);
  }
    return (
        <div>
          <div className='border mt-5 bg-base-300'>
            <div className=''>
            <h2 className='font-semibold  p-2'>Date</h2>
                    
            <p className='p-2'>{moment().format("dddd, MMMM Do YYYY, h:mm a")}</p>

                </div> 
                <div>
    
     </div>
        </div>
        <div className='bg-base-300 mt-6'>
            
            <div className='flex justify-between'>
                
        <h2 className='font-semibold  p-2'>Suggested Page</h2>
        <h2 className=' p-2'>See more</h2>
        </div>
       <figure> <div className='p-2'>
        <div className="carousel w-full">

<div id="slide2" className="carousel-item relative w-full">
<img src={img2} alt='' className="w-full" />
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  <a href="#slide1" className="btn btn-circle">❮</a> 
  <a href="#slide3" className="btn btn-circle">❯</a>
</div>
</div> 
<div id="slide3" className="carousel-item relative w-full">
<img src={img3} alt='' className="w-full" />
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  <a href="#slide2" className="btn btn-circle">❮</a> 
  <a href="#slide4" className="btn btn-circle">❯</a>
</div>
</div> 
<div id="slide4" className="carousel-item relative w-full">
<img src={img4} alt='' className="w-full" />
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  <a href="#slide3" className="btn btn-circle">❮</a> 
  <a href="#slide1" className="btn btn-circle">❯</a>
</div>
</div>
            </div>
            <div className='flex items-center justify-center gap-1'>
            <div>
            <p className='flex items-center gap-2' onClick={handleLike}>{liked ? <BsHandThumbsUpFill className='text-info' /> : <BsHandThumbsUp />} Pages</p>
          </div></div>
        </div></figure>
      </div>
  
 
</div>

      
    );
};

export default RightSide;