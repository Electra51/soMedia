import React from 'react';
import { Link } from 'react-router-dom';
import { SlLike } from 'react-icons/sl';

const PerPost = ({ onePostData, setPostDataModals }) => {
    const { image, userProfile, userName, time, message, _id,like } = onePostData;
    console.log(onePostData);
    return (
        <div className="card w-100 bg-base-300 shadow-xl p-10">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
                                  <h2 className="">
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
          </h2>
                <p className='mt-5'>{message}</p>
                
          <div className="card-actions justify-between items-center">
          <div>
                <p className='flex items-center gap-2'><SlLike></SlLike> <span>{like}</span></p>
              </div>
            <div className="flex gap-2 items-center" >
              
            <div >
                        <label onClick={()=>setPostDataModals(onePostData)}
                            htmlFor="post-comment-modal" className="text-primary">Add Comment</label>
                        
                        </div>
            <Link to={`/media/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
          </div>
        </div>
      </div>
    );
};

export default PerPost;