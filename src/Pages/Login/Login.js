import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { setAuthToken } from '../../Api/auth'
import SmallSpinner from '../../Components/Shared/Spinner/SmallSpinner'
import { AuthContext } from '../../contexts/AuthProvider'
import loginImg from '../../Assets/images/login.png'
import PrimaryButton from '../../Components/Shared/PrimaryButton'

const Login = () => {
    const [error, setError] = useState('');
  const [userEmail, setUserEmail] = useState('')
  const { signin, loading, setLoading, signInWithGoogle, resetPassword } =
    useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const handleSubmit = event => {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value

    event.target.reset();
    setError('');
    signin(email, password)
      .then(result => {
        toast.success('Login Successful.....!')
        // Get Token
        setLoading(false)
        setAuthToken(result.user)
        navigate(from, { replace: true })
      })
      .catch(err => {
        toast.error(err.message)
        console.log(err)
          setLoading(false)
          setError(err.message)
      })
  }

  const handleGoogleSignin = () => {
    signInWithGoogle().then(result => {
      console.log(result.user)
      setAuthToken(result.user)
      setLoading(false)
      navigate(from, { replace: true })
    })
  }

  // Pass reset
  const handleReset = () => {
    resetPassword(userEmail)
      .then(() => {
        toast.success('Please check your email for reset link')
      })
      .catch(err => {
        toast.error(err.message)
        console.log(err)
          setLoading(false)
          setError(err.message)
      })
  }

  return (
      <div className='h-[600px] flex flex-col lg:flex-row justify-center items-center my-10 lg:my-2'>
          <div>
      <img src={loginImg} alt="" />
             </div>
      <div className='w-96 p-5 rounded-md bg-base-300'>
          <h1 className='text-3xl font-bold text-center'>Log In</h1>
      
        <form
          onSubmit={handleSubmit}
         
          
        >
         
            <div>
              <label htmlFor='email' className="label-text">
                Email address
              </label>
              <input
                onBlur={event => setUserEmail(event.target.value)}
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='input input-bordered w-full'
                
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className="label-text">
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                id='password'
                required
                placeholder='*******'
                className='input input-bordered w-full'
              />
            </div>
         
          <button
            onClick={handleReset}
            className='text-xs hover:underline text-gray-600'
          >
            Forgot password?
          </button>
                  <div>
                     
                      <PrimaryButton
              type='submit'
              classes='btn btn-info w-full'
            >
              {loading ? <SmallSpinner /> : 'Sign in'}
            </PrimaryButton>
                  </div>
                  <p className='text-red-500'>{error}</p>
        </form>
        
              <div className="divider">OR</div>
             
              
               
          <button
            onClick={handleGoogleSignin}
           
            className='btn btn-outline btn-info w-full'
          >
        
                      Continue with Google
          </button>
         
         
        
        <p className='text-center text-gray-600'>
          Don't have an account yet?{' '}
          <Link to='/signup' className='text-primary font-bold'>
            Sign up
          </Link>
         
        </p>
      </div>
    </div>
  )
}

export default Login
