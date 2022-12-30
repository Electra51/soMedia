import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider';



const ProfileImage = () => {

    const { user } = useContext(AuthContext);
    const { displayName } = user;

    return (

        <div className="card card-compact w-full mt-5 bg-base-300 shadow-xl">
            <figure>{
                user?.uid ?
                    <>
                        {user?.photoURL ?
                            <img title={displayName} alt=''

                                src={user?.photoURL}>
                            </img>
                            : <FaUser></FaUser>
                        }
                    </>
                    :
                    null
            }</figure>
            <div className="card-body">
                <h2 className="font-bold text-2xl text-center">{user?.displayName}</h2>
                <p className='text-center'>{user?.email}</p>
            </div>
        </div>

    );
};

export default ProfileImage;