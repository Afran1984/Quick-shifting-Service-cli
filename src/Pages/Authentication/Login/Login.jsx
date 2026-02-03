import React, { use, useState } from 'react'
import { set, useForm } from 'react-hook-form'
import FullPageLoader from '../../Shared/FullPageLoader/FullPageLoader';

const Login = () => {
  const [loading, setLoading] = useState(false);

  const { register,
  handleSubmit
   } = useForm();
   const onSubmit = async(data) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    console.log(data);
   };
  return (
    <>
    {loading && <FullPageLoader />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register("email")} className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" {...register("password")} className="input" placeholder="Password" />

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </>
  )
}

export default Login
