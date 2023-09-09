import RestaurantPrice from "@/app/components/Price";
import { calculateReviewAverage } from "@/util/calculateReviewAverage";
import { Location, PRICE, Region, Review } from "@prisma/client";
import Link from "next/link";

interface RestaurantProps {
    id: number;
    name: string;
    main_image: string;
    slug: string;
    price: PRICE;
    location: Location;
    region: Region;
    review: Review[]
}

function RestaurantCard({restaurant}: {restaurant: RestaurantProps}) {

    const renderReview = () => {
        const rating = calculateReviewAverage(restaurant.review)
        if(rating > 4) return "Awesome"
        else if(rating <=4 && rating>3) return "Good"
        else if(rating <=3) return "Average"
        else return ""
    }
    const {main_image, name, location, region, price} = restaurant
    return (<div className="border-b flex pb-5">
        <img
            src={main_image}
            alt=""
            className="w-44 rounded"
        />
        <div className="pl-5">
            <h2 className="text-3xl">{name}</h2>
            <div className="flex items-start">
                <div className="flex mb-2">*****</div>
            <p className="ml-2 text-sm">{renderReview()}</p>
            </div>
            <div className="mb-9">
                <div className="font-light flex text-reg">
                    <RestaurantPrice price={price} />
                    <p className="mr-4">{region.name}</p>
                    <p className="mr-4">{location.name}</p>
                </div>
            </div>
            <div className="text-red-600">
                <Link href={`restaurant/${restaurant.slug}`}>View more information</Link>
            </div>
        </div>
    </div>);
}

export default RestaurantCard;