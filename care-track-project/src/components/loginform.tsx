'use client';

import { authenticate } from '@/lib/actions';
import { useFormState } from 'react-dom';

const LoginForm = () => {
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);

 return (
  <form action={dispatch} className='space-y-4 w-full max-w-sm'>
   <input required name='email' placeholder='email' />
   <input
    required
    name='password'
    type='password'
    placeholder='password'
    
   />
   {errorMessage && (
    <>
        <p className="text-sm text-red-500">{errorMessage}</p>
    </>
    )}
   <button className='text-red-500 bg-black' type='submit'>
    submit
   </button>
  </form>
 );
};

export default LoginForm;