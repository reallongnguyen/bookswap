import { FC } from 'react';
const Login: FC =() => {
    return(
        <div>
      <div className="text-xxl text-green-500 flex justify-center mt-12">
          LOGIN
      </div>
      
      <input className="w-full p-3" type="text" placeholder="usename"> 
         
      </input>    

      <input className="w-full p-3 mt-3" type="password" placeholder="password" > 
         
      </input>     
      <div className="flex justify-around"> 
      <button className="bg-blue-500 mt-12 rounded"> 
           Login
          </button>
       <button className="bg-green-500 mt-12 rounded">
           Sign up
           </button>   
          </div>
      </div>
    )
      
    
    
}
export default Login