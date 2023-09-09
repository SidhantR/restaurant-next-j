import Card from './components/Card'
import Header from './components/Header'
import {PrismaClient, Location, Region, PRICE, Review} from "@prisma/client"

export interface RestaurantCardType {
  id: number
  name: string
  main_image: string
  location: Location
  region: Region
  price: PRICE
  slug: string
  review: Review[]
}

const prisma = new PrismaClient()

const fetchRestaurants = async(): Promise<RestaurantCardType[]> => {
  return await prisma.restaurant.findMany({
    select: {
      id : true,
      name: true,
      main_image: true,
      location: true,
      region: true,
      price:true,
      slug: true,
      review: true
    }
  })
}

export default async function Home() {
  const restaurants = await fetchRestaurants()
  return (
        <main>
          <Header />
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            {restaurants.map((restaurant) => (
              <Card restaurant={restaurant} />
            ))}
          </div>
        </main> 

  )
}
// 