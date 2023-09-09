import fullStar from "../../../public/icons/full-star.png"
import halfStar from "../../../public/icons/half-star.png"
import emptyStar from "../../../public/icons/empty-star.png"
import Image from "next/image";
import { Review } from "@prisma/client";
import { calculateReviewAverage } from "@/util/calculateReviewAverage";

function Stars({review, rating}: {review: Review[], rating?:number}) {
    // rating - for printing user review star
    // review - for printing restaurant rating star (by calculating average first)

    const reviewRating = rating || calculateReviewAverage(review);

    const renderStar = () => {
        const stars = []
        for (let i = 0; i < 5; i++) {
            // toFixed function return string so using parseFloat to convert it into string
            const diff = parseFloat((reviewRating-i).toFixed(1)) 
            if(diff >= 1) stars.push(fullStar)
            else if(diff < 1 && diff > 0){
                if(diff < 0.2) stars.push(emptyStar)
                else if(diff > 0.2 && diff <=0.6)stars.push(halfStar)
            } else stars.push(emptyStar)
        }
        return stars.map((star) => (
            <Image src={star} alt="" className="w-4 h-4mr-1" />
        ))
    }

    return ( 
        <div className="flex">
            {renderStar()}
        </div>
     );
}

export default Stars;