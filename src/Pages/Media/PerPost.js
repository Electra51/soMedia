import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsHandThumbsUp, BsHandThumbsUpFill } from 'react-icons/bs';
import { AuthContext } from '../../contexts/AuthProvider';

const PerPost = ({ onePostData, setPostDataModals }) => {
  const {user}=useContext(AuthContext)
  const [liked, setLiked] = useState(false);
    const { image, userProfile, userName, time, message, _id,like } = onePostData;
  console.log(onePostData);
  const handleLike = () => {
    setLiked(!liked)
    setLiked(1);
  }
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
              <p className='flex items-center gap-2' onClick={handleLike}>{liked?<BsHandThumbsUpFill className='text-primary'/>: <BsHandThumbsUp/>}<span>{like}</span></p>
              </div>
            <div className="flex gap-2 items-center" >
              
            <div >
                        <label onClick={()=>setPostDataModals(onePostData)}
                            htmlFor="post-comment-modal" className="text-info">Add Comment</label>
                        
                        </div>
                        <div className="flex gap-2 items-center" >
            {user?.email ? <> <Link to={`/media/${_id}`}><button className="btn btn-info">View Details</button></Link>
            </>
              :
              <>
                <Link to='/login'><button className="btn btn-info">View Details</button></Link></>}
          </div>
                </div>
          </div>
        </div>
      </div>
    );
};

export default PerPost;