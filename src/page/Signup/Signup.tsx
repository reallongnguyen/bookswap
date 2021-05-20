import { FC } from 'react';
import { useHistory } from 'react-router-dom';

const Signup: FC = () => {
    const history = useHistory();
    const signupProfile = () => {
        
        history.push('/profile');
    };
    const signupReturnSignin = () => {
        
        history.push('/Login');
    };

    return (
        <div className='px-8 h-full flex flex-col justify-center'>
            <div className="text-xl font-semibold text-[#272727] flex justify-center pt-12">
                SIGN UP
            </div>
       
            <input className="w-full p-3 mt-8 border border-gray-200 rounded" type="text" placeholder="username" />
            <input className="w-full p-3 mt-3 border border-gray-200 rounded" type="text" placeholder="fullname" />
            <input className="w-full p-3 mt-3 border border-gray-200 rounded" type="password" placeholder="password" />
            <input className="w-full p-3 mt-3 border border-gray-200 rounded" type="password" placeholder="Password confirm" />
            <input className="w-full p-3 mt-3 border border-gray-200 rounded" type="text" placeholder="Address" />
            <div className="flex justify-between">

                <button onClick={ signupReturnSignin} className=" mt-12 rounded px-3 py-2 border border-gray-200">
                    Return Signin
           </button>
           <button onClick={signupProfile} className="bg-blue-500 mt-12 rounded px-3 py-2">
                    Sign up
          </button>
            </div>
        </div>
    )
}

export default Signup
