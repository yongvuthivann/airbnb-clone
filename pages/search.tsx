import Footer from "../components/Footer"
import Header from "../components/Header"
import {useRouter} from "next/dist/client/router"
import Image from "next/image"
import { HeartIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"
import Map from "../components/Map"

function Search({searchResults}) {

  const router = useRouter()
  const {location, startDate, endDate, noOfGuests} = router.query
  const range = `${startDate} - ${endDate}`

  return (
    <div className="h-screen">
        <Header placeholder={`${location} | ${range} | ${noOfGuests}`}/>

        <main className="flex">
            <section className="flex-grow pt-14 px-6">
              <p className="text-xs">300+ Stays - {range} for {noOfGuests} number of guests</p>
              <h1 className="text-3xl font-semibold mt-2 mb-6">Stay in {location}</h1>
              <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                <p className="button">Cancellation Flexibility</p>
                <p className="button">Type of Place</p>
                <p className="button">Price</p>
                <p className="button">Rooms and Beds</p>
                <p className="button">More fillter</p>
              </div>

              {searchResults.map(item =>(
                <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
                  <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                    <Image src={item.img} layout="fill" objectFit="cover" className="rounded-2xl"></Image>
                  </div>
                  <div className="flex flex-col flex-grow pl-5">
                    <div className="flex justify-between">
                      <p>{item.location}</p>
                      <HeartIcon className="h-7 cursor-pointer"/>
                    </div>
                    <h4 className="text-xl">{item.title}</h4>
                    <div className="border-b w-10 pt-2"/>

                    <p className="pt-2 text-sm text-gray-500 flex-grow">{item.description}</p>

                    <div className="flex justify-between pt-5">
                      <p className='flex items-center'>
                        <StarIcon className="h-5 text-red-400"/>
                        {item.star}
                      </p>
                      <div>
                        <p className="text-lg font-semibold lg:text-2xl pb-2">{item.price}</p>
                        <p className="text-right font-extralight">{item.total}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            <section className="hidden xl:inline-flex xl:min-w-[600px]">
              <Map/>
            </section>
        </main>

        <Footer/>
    </div>
  )
}

export default Search


export async function getServerSideProps(){
  const searchResults = await fetch("https://links.papareact.com/isz").then(res => res.json())

  return {
    props: {
      searchResults
    }
  }
}