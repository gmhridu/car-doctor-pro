"use client"
import Image from 'next/image';
import Link from 'next/link';
import { IoCartOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import React from 'react';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const session = useSession()
  console.log(session)

  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "My Bookings",
      path: "/my-bookings",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contacts",
      path: "/contacts",
    },
  ];
  return (
    <div className="bg-base-100 text-slate-900">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <Link href={"/"}>
            <Image src="/assets/logo.svg" alt="logo" height={50} width={50} />
          </Link>
        </div>
        <div className="navbar-center">
          <div className="flex items-center space-x-6">
            {navItems?.map((item) => (
              <Link
                className="font-semibold hover:text-primary duration-300"
                href={item?.path}
                key={item?.path}
              >
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="navbar-end space-x-2">
          <div className="flex gap-x-1 text-xl">
            <IoCartOutline />
            <IoMdSearch/>
          </div>
          <button className="btn bg-transparent border border-primary text-primary hover:bg-primary hover:outline-none px-3 hover:text-white">
            Appointment
          </button>

          {session.data && (<div className="cursor-pointer">
            <Image title={session?.data?.user?.name} alt={session?.data?.user?.name} src={session?.data?.user?.image} height={40} width={40} className="rounded-full"/>
          </div>)}

            {/* login and log out button */}
          {!session.data ? 
            (<Link href={'/login'} className="btn btn-primary text-white px-8">
            Login
          </Link>) : (
            <button onClick={()=> signOut()}  className="btn btn-primary text-white px-8">
            Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;