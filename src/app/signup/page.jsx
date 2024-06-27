/* eslint-disable react/no-unescaped-entities */
"use client"
import SocialSignIn from '@/components/shared/SocialSignIn'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const SignupPage = () => {
  const handleSignup = async(e)=> {
    e.preventDefault();

    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const res = await axios.post('http://localhost:3000/signup/api', newUser);

    console.log(res.data)
    if(res?.status === 200){
      e.target.reset()
    }
  }
  return (
    <div className="container mx-auto flex items-center justify-center my-16">
      <div className="grid grid-cols-2 gap-12">
        <div>
          <Image src={'/assets/images/login/login.svg'} height={540} width={540} alt="login image"/>
        </div>
        <div className="border-2 py-8 px-5 rounded-lg">
          <h5 className="text-4xl text-center font-semibold text-[#444] mb-5">Sign Up</h5>
          {/* sign up form */}
          <form onSubmit={handleSignup}>
          <div className="flex flex-col gap-2 space-y-3">
          <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-base font-semibold">Username</label>
          <input className="bg-[#fff] border border-[#E8E8E8] rounded-lg py-2 px-3  text-base font-medium text-slate-800" type="name" name="name" placeholder="Your Name"/>
          </div>
          <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-base font-semibold">Email</label>
          <input className="bg-[#fff] border border-[#E8E8E8] rounded-lg py-2 px-3  text-base font-medium text-slate-800" type="email" name="email" placeholder="Your Email"/>
          </div>
          <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-base font-semibold">Password</label>
          <input className="bg-[#fff] border border-[#E8E8E8] rounded-lg py-2 px-3  text-base font-medium text-slate-800" type="password" name="password" placeholder="Your password"/>
          </div>
          <button type="submit" className="btn btn-primary text-white text-lg font-semibold">Signup</button>
          </div>
          </form>
          <div>
            <h5 className="text-lg text-[#444] font-medium text-center my-3">Or Sign Up with</h5>
            {/* social sign in */}
            <SocialSignIn/>
            <div className="text-center my-5">
              <h5 className="text-base font-normal text-[#737373]">
              Already have an account? <span className="text-base font-semibold text-primary hover:underline">
                <Link href={'/login'}>Login</Link>
              </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
