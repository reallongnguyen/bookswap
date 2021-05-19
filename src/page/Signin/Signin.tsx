import { FC } from 'react';
import { useHistory } from 'react-router-dom';

const Signin: FC = () => {
    const history = useHistory();
    const signin = () => {
        // ninshou
        // get username, password
        // validate, if validation failed -> alert
        // -> request auth API
        // ... find user in db
        // ... check password
        // ... return user's information or error
        // in case error -> alert
        // in case success -> redirect '/'
        history.push('/');
    };

    return (
        <div className='px-8 h-full flex flex-col justify-center'>
            <div className="text-xl font-semibold text-[#272727] flex justify-center pt-12">
                SIGN IN
            </div>
       
            <input className="w-full p-3 mt-8 border border-gray-200 rounded" type="text" placeholder="username" />

            <input className="w-full p-3 mt-3 border border-gray-200 rounded" type="password" placeholder="password" />
      
            <div className="flex justify-between">

                <button onClick={() =>{history.push('/signup')}} className=" mt-12 rounded px-3 py-2 border border-gray-200">
                    Sign up
           </button>
           <button onClick={signin} className="bg-blue-500 mt-12 rounded px-3 py-2">
                    Sign in
          </button>
            </div>
        </div>
    )
}

export default Signin
