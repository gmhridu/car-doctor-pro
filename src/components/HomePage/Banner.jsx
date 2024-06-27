import React from 'react';
import Link from 'next/link'


const Banner = () => {
  return (
    <div className="container mx-auto my-5">
      <div className="w-full carousel">
        {banners?.map((slide, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full bg-top bg-no-repeat sm:h-[50vh] lg:h-[80vh] rounded-xl"
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(7, 25, 82, 0.7), rgba(0, 0, 0, 0.3)), url(/assets/images/banner/${
                index + 1
              }.jpg)`
            }}
          >
            <div className="flex items-center w-full h-full text-white pl-36">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold">
                {slide?.title}
              </h1>
                <p>{slide?.description}</p>
                <button className="btn btn-primary mr-4 text-white">Discover More</button>
                <button className="btn btn-primary btn-outline">Latest Project</button>
            </div>
            </div>
            <div className="absolute flex justify-between transform bottom-12 right-12">
              <Link href={slide?.prev} className="btn btn-circle mr-5">
                ❮
              </Link>
              <Link href={slide?.next} className="btn btn-circle">
                ❯
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const banners = [
  {
    title: "Affordable Price For Car Servicing",
    description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide2",
    prev: "#slide4",
  },
  {
    title: "Affordable Price For Car Servicing",
    description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    title: "Affordable Price For Car Servicing",
    description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    title: "Affordable Price For Car Servicing",
    description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide1",
    prev: "#slide3",
  },
]

export default Banner;