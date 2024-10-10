import { auth } from '@/auth/auth';
import { logout } from '@/lib/actions';

const Protected = async () => {
 const session = await auth();
 console.log(
    session?.user
 )
 
 return (
  <form
   action={logout}
   className='h-screen w-screen flex flex-col justify-center items-center gap-10'
  >
   <div>
    <p>{session?.user?.email}</p>
   </div>
   <button type='submit' className='w-40'>
    logout
   </button>
  </form>
 );
};

export default Protected;