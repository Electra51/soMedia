import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const ProfileImage = () => {
    const { user } = useContext(AuthContext);
    
   

    return (
        <div className=''>
            
  
  {
                    user?.uid ?
                        <>
                           
                        <span className='mr-2'>  <Link className='ml-2 pr-3'>
                                {user?.photoURL ?
                                    <img title={user.displayName} alt=''
                                      
                                        src={user?.photoURL}>
                                    </img>
                                    : <FaUser></FaUser>
                                }
                        </Link><h2 className='text-xl font-bold text-center'>Name: {user?.displayName}</h2>
                            <h2 className='text-center'>{user?.email}</h2></span>
                        
                    
                    </>
                    :
                    
                    null
                }
  

         
                         
  
                    
   
        </div>
    );
};

export default ProfileImage;