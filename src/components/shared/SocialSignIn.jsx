"use client"
import { signIn, useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { FaFacebookF, FaGithub, } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const SocialSignIn = () => {
  const router = useRouter()
  const session = useSession()
  const searchParams = useSearchParams()


  const path = searchParams.get('redirect');
  const handleSocialSignIn = async(provider)=> {
    const res = await signIn(provider, {redirect: true, callbackUrl: path? path : '/'})

    if(res?.status === 200){
      router.push('/')
    }
  }


  return (
    <div className="flex gap-x-4 items-center justify-center my-3 cursor-pointer">

             {/* Facebook */}
            <button className="bg-[#F5F5F8] rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-300">
            <FaFacebookF className="text-2xl text-[#3B5998]"/>
            </button>

            {/* Github */}  
            <button onClick={()=> handleSocialSignIn('github')} className="bg-[#F5F5F8] rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-300">
            <FaGithub className="text-2xl"/>
            </button>

            {/* Google */}
            <button onClick={()=> handleSocialSignIn('google')} className="bg-[#F5F5F8] rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-300">
            <FcGoogle className="text-2xl"/>
            </button>
            </div>
  )
}

export default SocialSignIn