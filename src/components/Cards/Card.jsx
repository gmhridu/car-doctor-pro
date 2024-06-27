import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({service}) => {
  const {title, img, description, _id, price} = service || {};
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure className="w-full h-full">
      <Image height={120} width={430} src={img} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-between items-center">
          <h6 className="text-primary font-semibold">Price: ${price}</h6>
          <Link href={`/services/${_id}`}>
          <button className="btn btn-primary text-white">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
