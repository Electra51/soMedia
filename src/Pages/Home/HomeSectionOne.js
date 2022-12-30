import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { FaUser } from 'react-icons/fa';
import moment from 'moment';
import { toast } from 'react-hot-toast';

const HomeSectionOne = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handlePost = data => {
    console.log(data.image[0]);
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_key}`
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imgData => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const myPost = {
            message: data.message,
            image: imgData.data.url,
            userName: user.displayName,
            userProfile: user?.photoURL,
            time: moment().format("dddd, MMMM Do YYYY, h:mm a"),
            like: ""

          }
          //save post to database
          fetch('http://localhost:5000/myPosts', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(myPost)
          })
            .then(res => res.json())
            .then(result => {
              console.log(result);
              toast.success('upload successfully...')
              navigate('/media')
            })
        }

      })

  }
  return (
    <div className="card card-side bg-base-300 shadow-xl">
      <div className="card-body">
        <div className='flex items-center justify-start align-top p-1'>
          <button className='btn btn-ghost btn-circle btn-sm'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
          </button>
          <p>Create post</p>
        </div>
        <hr />
        <h2 className="card-title text-base">
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
              <span className="text-xs">  <Link className='ml-2 pr-3' to="/profile">
                {user?.photoURL ?
                  <img title={user.displayName} style={{ height: '35px' }} alt='profileImage'

                    src={user?.photoURL}>
                  </img>
                  : <FaUser></FaUser>
                }
              </Link></span>

            </div>
          </div>
          What's you want to write !</h2>
        <form onSubmit={handleSubmit((handlePost))}>

          <textarea type="text" {...register("message", { required: "img is required" })} className="textarea textarea-bordered w-full" name="message" placeholder="Your message"></textarea>
          <div className="form-control">

            <input type="file" {...register("image", { required: "img is required" })} className="input w-full" />
            {errors.img && <p className='text-red-600 text-left' role="alert">{errors.img?.message}</p>}
          </div >
          <div className="card-actions justify-end">

            <input className='btn btn-info mt-5' type="submit" value='submit' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomeSectionOne;