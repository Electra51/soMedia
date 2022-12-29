import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdOutlinePermMedia } from 'react-icons/md';
import LeftSide from './LeftSide';
import { AuthContext } from '../../contexts/AuthProvider';
import { FaUser } from 'react-icons/fa';


const Header = () => {
    const [dark, setDark] = useState(false);
    const { user, logout } = useContext(AuthContext);
    const handleDark = () => {
        setDark(!dark);
        localStorage.setItem('dark-mode', !dark)
    };
    useEffect(() => {
        const localDark = JSON.parse(localStorage.getItem('dark-mode'))
        console.log(localDark);
        setDark(localDark);
    }, [])
    useEffect(() => {
        if (dark) {
            document.querySelector('html').setAttribute('data-theme', 'dark')
        }
        else {
            document.querySelector('html').setAttribute('data-theme', 'soMediaColorTheme')
        }
    }, [dark])

     //redirect
     const navigate = useNavigate()
     const location = useLocation()
     const from = location.state?.from?.pathname || '/'

    const handleLogOut = () => {
        logout()
            .then(() => { })
            .catch(err => console.log(err))
            navigate(from, { replace: true })
    }
    
    return (
        <div className="navbar bg-base-300 drop-shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <LeftSide></LeftSide>
                        
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl btn-sm">soMedia</Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/home'>Home</Link></li>
                    <li tabIndex={0}>
                        <Link to='/media'>
                            <MdOutlinePermMedia></MdOutlinePermMedia>Media

                        </Link>

                    </li>
                    {
                        user?.uid ?
                            <>
                            <li><Link to='/about'>About</Link></li></>:null
                    }
                    
                </ul>
            </div>

            <div className="navbar-end">
                {/* search icon with modal */}
                <label htmlFor="search-modal" className="btn btn-ghost btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </label>
                <input type="checkbox" id="search-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="search-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Search here!</h3>
                        <input type="text" placeholder="Search by name,letter etc..." className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                {/* message icon button */}
                <button className="btn btn-ghost btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                </button>
                <label className="swap swap-rotate btn btn-ghost btn-circle btn-sm">


                <input type="checkbox" onClick={handleDark} />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="swap-on w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
</svg>


                <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>


                {/* <svg className="swap-off fill-current w-6 h-6"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg> */}

                </label>
                {
                    user?.uid ?
                        <>
                                                  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        
        <Link className='ml-2 pr-3' >
                                {user?.photoURL ?
                                    <img title={user.displayName} style={{ height: '35px' }} alt=''
                                      
                                        src={user?.photoURL}>
                                    </img>
                                    : <FaUser></FaUser>
                                }
                            </Link>
        
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        
        <li><Link onClick={handleLogOut}>Logout</Link></li>
      </ul>
    </div>
                         {/* {user?.displayName} */}
                            {/* <button onClick={handleLogOut} className='btn btn-primary btn-outline'>LogOut</button> */}
     
                    </>
                    :
                    
                    <Link to='/login' className='btn btn-primary'>Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Header;