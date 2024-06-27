"use client"
import { getServicesDetails } from '@/services/getServices';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const CheckoutPage = ({params}) => {
    const {data} = useSession()
    const [services, setServices] = useState({});

    
    const loadService = async () => {
        const { service } = await getServicesDetails(params?.id);
        setServices(service);
    }

    const {title, img, price,} = services || {};

    const handleBooking = async(e) => {
        e.preventDefault();
        const newBookings = {
          email: data?.user?.email,
          name: data?.user?.name,
          address: e.target.address.value,
          phone: e.target.phone.value,
          date: e.target.date.value,
          ...services,
        };

        const {data: booking} = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/checkout/api/new-booking`, newBookings)

        if(booking){
          toast.success('Booking Successfully!',{
            position: "top-center"
          })
          e.target.reset()
        }
    }

    useEffect(()=> {
        loadService();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[params])
    return (
        <div className='container mx-auto'>
            <div className="relative  h-72">
            <Image
              className="absolute h-72 w-full left-0 top-0 object-cover"
              src={img}
              alt="service"
              width={1920}
              height={1080}
              style={{ width: "90vw" }}
            />
            <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
              <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
                 Checkout {title} 
              </h1>
            </div>
          </div>
          <div className="my-12 bg-[#F3F3F3] p-12 rounded-xl">
        <form onSubmit={handleBooking}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input defaultValue={data?.user?.name}  type="text" name="name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input defaultValue={new Date().getDate()} type="date" name="date" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              defaultValue={data?.user?.email}
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due amount</span>
              </label>
              <input
              defaultValue={price}
              readOnly
                type="text"
                name="price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
              required
                type="text"
                name="phone"
                placeholder="Your Phone"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Present Address</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary  text-white"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
        </div>
    );
};

export default CheckoutPage;