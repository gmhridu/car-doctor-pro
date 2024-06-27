"use client"
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const MyBookingsPage = () => {
    const session = useSession()
    const [bookings, setBookings] = useState([]);

    const loadData = async()=> {
        const res = await axios(`http://localhost:3000/my-bookings/api/${session?.data?.user?.email}`)
        const myBookings = res.data;
        setBookings(myBookings?.myBookings);
    }

    useEffect(()=> {
        loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session])

    const handleDelete = async(id) => {
        const deleted = await axios.delete(`http://localhost:3000/my-bookings/api/booking/${id}`)
        if(deleted?.data?.response?.deletedCount > 0){
          toast.success('Booking Deleted Successfully!')
            loadData();
        }
    }

    return (
        <div className='container mx-auto'>
           <div className="relative  h-72">
            <Image
              className="absolute h-72 w-full left-0 top-0 object-cover"
              src={'/assets/images/about_us/parts.jpg'}
              alt="service"
              width={1920}
              height={1080}
              style={{ width: "90vw" }}
            />
            <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
              <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
                 My Bookings
              </h1>
            </div>
          </div>
          <div className='mt-12'>
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Service Name</th>
        <th>Price</th>
        <th>Booking Date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        bookings?.map(({title, date, _id, price}, index)=>(
            <tr key={_id}>
            <th>{index + 1}</th>
            <td>{title}</td>
            <td>{price}</td>
            <td>{date}</td>
            <td>
                <div className='flex items-center space-x-3'>
                    <Link href={`/my-bookings/update/${_id}`}>
                    <button className='btn btn-primary text-white'>Edit</button>
                    </Link>
                    <button onClick={()=> handleDelete(_id)} className='btn btn-error text-white'>Delete</button>
                </div>
            </td>
          </tr>
        ))
       }
    </tbody>
  </table>
</div>
          </div>
        </div>
    );
};

export default MyBookingsPage;