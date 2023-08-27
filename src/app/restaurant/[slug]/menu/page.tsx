import NavBar from "@/app/components/NavBar";
import RestaurantNavBar from "../components/RestaurantNavBar";
import RestaurantMenu from "../components/RestaurantMenu";
import Header from "../components/Header";

export default function RestaurantMenuPage() {
  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <RestaurantNavBar />
      <RestaurantMenu />
    </div>
  )
}