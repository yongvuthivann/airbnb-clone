import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Image from 'next/image'
import { exploreData, cardsData } from '../typings'
import Footer from '../components/Footer'

interface Props {
  exploreData: [exploreData]
  cardsData: [cardsData]
}

export default function Home({ exploreData, cardsData }: Props) {
  console.log(exploreData)
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        {/* <link rel="icon" href="https://links.papareact.com/qd3" /> */}
      </Head>
      <Header />
      <Banner />
      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>

          {/* pull some data from server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <div
                className="m-2 mt-5 flex transform cursor-pointer items-center space-x-4 rounded-xl transition duration-200 ease-out hover:scale-105 hover:bg-gray-100"
                key={item.img}
              >
                {/* left */}

                <div className="relative h-16 w-16">
                  <Image src={item.img} layout="fill" className="rounded-lg" />
                </div>
                {/* right */}
                <div>
                  <h2>{item.location}</h2>
                  <h3>{item.distance}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="py-6 text-4xl font-semibold">Live Anywhere</h2>
          <div className="ml-3 flex space-x-3 overflow-scroll p-3 scrollbar-hide">
            {cardsData.map((item) => (
              <div className="transform cursor-pointer transition duration-300 hover:scale-105">
                <div className="relative h-80 w-80" key={item.img}>
                  <Image src={item.img} layout="fill" className="rounded-xl" />
                </div>
                <h3 className="mt-3 text-2xl">{item.title}</h3>
              </div>
            ))}
          </div>
        </section>
        {/* discription: Wishlists curated by Airbnb. title: "The createst Outdoor" buttonText: Get Inspired */}
        <section className="relative py-16">
          <div className="relative h-96 min-w-[300px]">
            <Image
              src="https://links.papareact.com/4cj"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>
          <div className="absolute top-32 left-12">
            <h3 className="mb-3 w-64 text-4xl">The Createst Outdoor</h3>
            <p>Wishlists curated by Airbnb.</p>
            <button className="mt-5 rounded-lg bg-gray-900 px-4 py-2 text-sm text-white">
              Get Inspired
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  )

  const cardsData = await fetch('https://links.papareact.com/zp1').then((res) =>
    res.json()
  )

  return {
    props: {
      exploreData,
      cardsData,
    },
  }
}
