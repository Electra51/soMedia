import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import moment from 'moment';
import { toast } from 'react-hot-toast';

const PostCommentModal = ({ postDataModals, setPostDataModals }) => {
    const { image,message,userProfile,time,userName,_id}=postDataModals;
    const { user } = useContext(AuthContext);
   
    const handleComment = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const comment = form.comment.value;
        
        const comments = {
           
            nameOfCommentPerson: name,
            emailOfCommentPerson: email,
            photOfCommentPerson: photo,
            comment:comment,
            postPersonUserProfile:userProfile,
            postPersonUserName: userName,
            postPersonUserMessage: message,
            postPersonPostTime: time,
            id:_id,
            CommentTime: moment().format("dddd, MMMM Do YYYY, h:mm a")
        }

        fetch('http://localhost:5000/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comments)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setPostDataModals(null);
                toast.success('Comments the post successfully...')
                }
            })
        
        console.log(comments);
    }

    return (
        <div>
            <input type="checkbox" id="post-comment-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="post-comment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
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
                    <h2 className="">
                    {
                          message.length > 50 ? 
                              <p>{message.slice(0, 50) + '...'}</p>
                              : <p>{message }</p>
                      }</h2>
                   
                    <img src={image} alt="" width={100}/>
                    <form onSubmit={handleComment} className='grid grid-cols-1 gap-3 mt-10'>
                    <div>
                        <label className="label">
                        <span className="label-text">My Comment</span>
                        </label>
                        <input name="comment" type="text" placeholder="comment" className="input w-full input-bordered" />
                        </div>
                        <div>
                        <label className="label">
                        <span className="label-text">My name</span>
                        </label>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        </div>
                        <div>
                        <label className="label">
                        <span className="label-text">My PhotoUrl</span>
                        </label>
                        <input name="photo" type="text" defaultValue={user?.photoURL} disabled placeholder="Your Photo" className="input w-full input-bordered" />
                        </div>
                        <div>
                        <label className="label">
                        <span className="label-text">My Email</span>
                        </label>
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                       </div>
                       
                       
                        <br />
                        <input className='btn btn-info w-full' type="submit" value="Submit" />
                   </form>
                </div>
            </div>
        </div>
    );
};

export default PostCommentModal;