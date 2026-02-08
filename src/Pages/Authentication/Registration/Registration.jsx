 import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import FullPageLoader from '../../Shared/FullPageLoader/FullPageLoader';
import { NavLink } from 'react-router';
 
 const Registration = () => {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState:{errors}} = useForm();
    const onSubmit = async(data) => {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoading(false);
        console.log(data);

    }
   return (
    <>
    {loading && <FullPageLoader />}
     <div className='bg-zinc-300 p-10'>
        
       <h1 className='text-3xl font-extrabold'>Create an Account</h1>
       <p>Register with QuickShift</p>

       <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register("email")}  className="input" placeholder="Email" />
          {
            errors.email?.type === 'required' && <p className='p-1 bg-amber-500'> Email is ReQuired</p>
          }

          <label className="label">Password</label>
          <input type="password" {...register("password", { required: true, minLength: 8 })} className="input" placeholder="Password" />
          {
            errors.password?.type === 'minLength' && <p className='p-1 bg-amber-500'> Password must be at least 8 characters</p>
          }

          
          <div>Do you have an account? <NavLink to="/login" className="link link-hover"> Login</NavLink></div>
          <button className="btn btn-neutral mx-auto">Register</button>
        </fieldset>
      </form>
     </div>

     </>
   )
 }
 
 export default Registration
 