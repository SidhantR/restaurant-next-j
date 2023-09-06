import RestaurantNavBar from "../components/RestaurantNavBar";
import RestaurantMenu from "../components/RestaurantMenu";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
interface Props {
  params: {
    slug: string
  }
}

const getRestaurantMenu = async (slug: string) => {
  const menu = await prisma.restaurant.findUnique({
    where: {
      slug
    },
    select: {
      items: true
    }
  })

  if (!menu) {
    throw new Error()
  }
  return menu.items
}

export default async function RestaurantMenuPage({ params }: Props) {
  const items = await getRestaurantMenu(params.slug)
  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      <RestaurantNavBar slug={params.slug} />
      <RestaurantMenu items={items} />
    </div>
  )
}