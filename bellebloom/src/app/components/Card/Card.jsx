import Image from "next/image";
import React from "react";

const Card = ({ product, setLoading }) => {
  return (
    <li key={product.id} props={product} className="card">
      <Image
        onError={(e) => {
          setLoading(true);
          e.target.onerror = null; // prevent infinite loop
          e.target.src =
            "https://scontent.fpdv1-1.fna.fbcdn.net/v/t1.6435-9/118086965_3083762088359603_978286998271727299_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=c2f564&_nc_ohc=nY2jrGP7TJMAX887GN_&_nc_ht=scontent.fpdv1-1.fna&oh=00_AfCcSyHMFEBnwyFzKXV3xiXxH_9QPzelPA27s-tlf7bN7g&oe=657A0337"; // replace with your placeholder image
          setLoading(false);
        }}
        priority
        width={200}
        height={200}
        loader={() => product.image_link}
        unoptimized={true}
        src={product.image_link}
        alt=""
      />

      <h3>{product.name}</h3>
    </li>
  );
};

export default Card;
