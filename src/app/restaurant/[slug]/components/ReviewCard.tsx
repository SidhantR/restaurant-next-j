import Stars from "@/app/components/Stars";
import {Review } from "@prisma/client";
const ReviewCard = ({review} : {review: Review}) => {

    const {first_name, last_name, rating, text} = review

    return (
        <div className="border-b pb-7 mb-7">
            <div className="flex">
                <div className="w-1/6 flex flex-col items-center">
                    <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                        <h2 className="text-white text-2xl">{first_name[0]}{last_name[0]}</h2>
                    </div>
                    <p className="text-center">{first_name} {last_name} </p>
                </div>
                <div className="ml-10 w-5/6">
                    <div className="flex items-center">
                        <Stars rating={rating} review={[]} />
                    </div>
                    <div className="mt-5">
                        <p className="text-lg font-light">
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard