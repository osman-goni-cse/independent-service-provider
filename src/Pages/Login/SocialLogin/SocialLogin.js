import React from 'react';
import google from '../../../images/social/google.png'
import github from '../../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleError] = useSignInWithGoogle(auth);

  const [signInWithGithub, githubUser, githubError] = useSignInWithGithub(auth);

  const navigate = useNavigate();
  let errorElement;

  if (googleError || githubError) {
    errorElement =
    <p className='text-danger'>Error: {googleError?.message} {githubError?.message} </p>
  
  }

  if (googleUser || githubUser) {
    navigate('/home')
  }

  return (
    <div>
      <div className='d-flex align-items-center'>
        <div style={{height: '2px'}} className='bg-primary w-50'></div>
        <p className='mt-2 px-2'>OR</p>
        <div style={{height: '2px'}} className='bg-primary w-50'></div>
      </div>
      {errorElement}
      <div>
        <button onClick={() => signInWithGoogle()} className='btn btn-dark w-50 mx-auto d-block my-2'>
          <img src={google} alt="" />
          <span className='px-2'>Continue with Google</span>
        </button>
      </div>
      
      <div>
        <button onClick={() => signInWithGithub()} className='btn btn-success w-50 mx-auto d-block my-2'>
          <img src={github} alt="" />
          <span className='px-2'>Continue with Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;