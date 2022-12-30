import React from 'react';
import { useLoaderData } from 'react-router-dom';


const PostDetails = () => {
    
    const loaderData= useLoaderData()
    const perComments = loaderData;
    const { userProfile, userName, time, image,message } = perComments;
    console.log(perComments);
    return (
      
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-10">
        
            <div className="border col-span-2 ...">
                
        <div className="card w-full bg-base-100 shadow-xl">
<div className="card-body">
<div className='flex items-center gap-3'>
                                  <div className="avatar placeholder">
    <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                                          <span className="text-xl">
                                              <img src={userProfile} alt="" />
      </span>
                                          </div>
                                          
                                      </div>
                                      <div>
                                          <p className='font-bold text-xl'>{userName}</p>
                            <p>{time}</p>
                           
                        </div>
                       
    </div>
    <p>{message}</p>
</div>
<figure><img src={image} alt="Shoes" /></figure>
</div>
    </div>
            <div className="border...">
            <div className="card w-full bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">All Comments</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          
        </div> 
    
        </div>
        </div>
    
    
   
  </div>
       
    );
};

export default PostDetails;