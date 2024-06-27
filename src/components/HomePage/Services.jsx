/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Card from '../Cards/Card'
import { getServices } from '@/services/getServices';




const Services = async () => {
  const {services} = await getServices();
  return (
    <div className="text-slate-800 min-h-screen">
        <div className="text-center container mx-auto space-y-2">
            <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
            <h2 className="text-5xl">Our Service Area</h2>
            <p>the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
        </div>
        <div className="container mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services?.map((service)=>(
              <Card key={service?._id} service={service}/>
            ))}
        </div>
    </div>
  )
}

export default Services