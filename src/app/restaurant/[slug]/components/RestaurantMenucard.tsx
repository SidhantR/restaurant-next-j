import { Item } from "@prisma/client";

function RestaurantMenuCard({ item }: { item: Item }) {
    const {name, price, description} = item
    return (
        <div className=" border rounded p-3 w-[49%] mb-3">
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="font-light mt-1 text-sm">
                {description}
            </p>
            <p className="mt-7">{price}</p>
        </div>);
}

export default RestaurantMenuCard;