import Link from "next/link";
import { RestaurantCardType } from "../page";
import RestaurantPrice from "./Price";

interface Props {
  restaurant : RestaurantCardType
}

function Card({restaurant}: Props) {

  const {slug, name, price, main_image, region, location, review } = restaurant
    return (  
    <div
        className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer"
      >
        <Link href= {`/restaurant/${slug}`}>
        <img
          src={main_image}
          alt=""
          className="w-full h-36"
        />
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2">{name}</h3>
          <div className="flex items-start">
            <div className="flex mb-2">*****</div>
            <p className="ml-2">{review.length} review
            {review.length === 1 ? '' : 's'}
            </p>
          </div>
          <div className="flex text-reg font-light capitalize">
            <p className=" mr-3">{region.name}</p>
            <RestaurantPrice price={price} />
            <p>{location.name}</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
        </Link>
      </div>);
}

export default Card;