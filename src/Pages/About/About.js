import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import ProfileImage from './ProfileImage';

const About = () => {
  const [aboutDataModals, setAboutDataModals] = useState(null);

  // const aboutData = useLoaderData()
  //   const aboutInfo = aboutData;
  //   const { userProfile, userName, time, image,message } = aboutInfo;
  //   console.log(aboutInfo);
  const [aboutData, setAboutData] = useState([]);
  useEffect(() => {
      fetch(`http://localhost:5000/aboutMe/${user?.email}`)
          .then(res => res.json())
          .then(data => setAboutData(data)
             
             )
  }, []);

  const { user } = useContext(AuthContext);
  const handleComment = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const university = form.university.value;
    const status = form.status.value;
    const address = form.address.value;
    const designation =form.designation.value
    const myInfo = {
       
        myName: name,
         email,
        myPhoto: photo,
        university:university,
        status:status,
      address: address ,
      designation:designation
    }

    fetch('http://localhost:5000/aboutMe', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(myInfo)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.acknowledged) {
                setAboutDataModals(null);
              toast.success('info added successfully...')
              window.location.reload()
            }
        })
    
    console.log(myInfo);
}
    return (
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
       <div className="...">
          <ProfileImage></ProfileImage>
  </div>
          <div className="...">
            <div className='flex justify-between'>
              <div className='mt-5'>
                <h1 className='text-3xl font-bold text-info'>Your Information:</h1>
                <h1 className='text-gray-600'>You Can upload your Information and edit it if you want!</h1>
                <br />
                <h1 className=' font-bold mt-3 text-info'>Designation: <span className=' font-normal text-gray-600'> {aboutData.designation}</span></h1>
                
                <h3 className=' font-bold mt-3 text-info'>Address:<span className=' font-normal text-gray-600'> {aboutData.address}</span></h3>
                
                <h1 className=' font-bold mt-3 text-info'>University:<span className=' font-normal text-gray-600'> {aboutData.university}</span></h1>
                
                <h3 className=' font-bold mt-3 text-info'>Status:<span className=' font-normal text-gray-600'> {aboutData.status}</span></h3>
                

              </div>
            <div>
            <label htmlFor="edit-about" className='btn btn-info mt-5'>Edit
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
  <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
</svg>


                </label>
                <input type="checkbox" id="edit-about" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="edit-about" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <div>     
                   
                      <form onSubmit={handleComment} className='grid grid-cols-1 gap-3 mt-10'>
                      <div>
                        <label className="label">
                        <span className="label-text">Designation</span>
                        </label>
                        <input name="designation" type="text" placeholder="designation" className="input w-full input-bordered" />
                        </div>
                    <div>
                        <label className="label">
                        <span className="label-text">Address</span>
                        </label>
                        <input name="address" type="text" placeholder="address" className="input w-full input-bordered" />
                        </div>
                        <div>
                        <label className="label">
                        <span className="label-text">University Name</span>
                        </label>
                        <input name="university" type="text" placeholder="university" className="input w-full input-bordered" />
                      </div>
                      <div>
                        <label className="label">
                        <span className="label-text">Status</span>
                        </label>
                        <input name="status" type="text" placeholder="status" className="input w-full input-bordered" />
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
                        <input className='btn btn-primary w-full' type="submit" value="Submit" />
                   </form>
                </div>
            </div>
        </div> 
  </div>
  
</div>
            </div>
      </div>
  </div>
  

    
      
    
    );
};

export default About;