import React from 'react'
import { Outlet } from 'react-router'
import Logo from '../../public/image/logo.png'

const AuthLayout = () => {
  return (
    <div className="bg-base-200">
        <div className="text-start p-10">
    <img
        src="https://i.ibb.co.com/zHZJdW5M/Logo.png"
        alt="Logo"
        width={50}
        height={50}
    />
  </div>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='flex-1'>
        <img
        src={Logo}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    </div>
    <div className='flex-1'>
      <Outlet></Outlet>
    </div>
  </div>
</div>
  )
}

export default AuthLayout
