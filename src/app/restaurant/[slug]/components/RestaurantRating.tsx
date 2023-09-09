import Stars from "@/app/components/Stars";
import { calculateReviewAverage } from "@/util/calculateReviewAverage";
import { Review } from "@prisma/client";

function RestaurantRating({review} : {review: Review[]}) {
    return (
    <div className="flex items-end">
        <div className="ratings mt-2 flex items-center">
            <Stars review={review} />
            <p className="text-reg ml-3">{calculateReviewAverage(review)}</p>
        </div>
        <div>
            <p className="text-reg ml-4">{review.length} Review{review.length > 1 ? 's': ''}</p>
        </div>
    </div>);
}

export default RestaurantRating;