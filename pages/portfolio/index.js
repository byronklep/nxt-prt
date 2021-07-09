import Link from 'next/link'
import Image from 'next/image'
import { getPortfolioItems } from '../../lib/data'
import Truncate from 'react-truncate'

export const getStaticProps = async () => {
  const data = await getPortfolioItems()
  return {
    props: {
      items: data.portfolios,
    },
  }
}

export default function PortfolioPage({ items }) {
  console.log(items)
  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items?.map((item) => (
          <div key={item.slug}>
            <Link href={`/portfolio/${item.slug}`}>
              <a>
                <div className="relative mb-10 overflow-hidden">
                  <div className="absolute w-full h-full z-10 opacity-60 bg-indigo-900 "></div>
                  <div className="absolute w-full h-full z-10 opacity-80 bg-indigo-900 flex flex-col justify-center items-center lg:text-xl text-2xl text-center px-4">
                    <div>
                      <h3 className="text-white font-semibold">{item.title}</h3>
                      <p className="text-gray-50 text-lg mt-4 leading-relaxed hidden md:flex">
                        <Truncate lines={3}>{item.description}</Truncate>
                      </p>
                      <div className="mt-4">
                        {item.tags.map((tag) => (
                          <span
                            className="text-white uppercase text-sm tracking-wide m-2 bg-indigo-700 px-2 py-1 rounded-lg"
                            key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Image
                    src={item.coverImage.url}
                    height={item.coverImage.height}
                    width={item.coverImage.width}
                    alt={item.title}
                    className="absolute"
                  />
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
