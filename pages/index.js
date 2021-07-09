import { getPostsAndPortfolios } from '../lib/data'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '../components/Hero'

export const getStaticProps = async () => {
  const data = await getPostsAndPortfolios()
  return {
    props: {
      data,
    },
  }
}

export default function Home({ data }) {
  console.log(data)
  return (
    <div>
      <Head>
        <title>Sam&apos;s Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
        {data.portfolios?.map((item) => (
          <div key={item.slug}>
            <Link href={`/portfolio/${item.slug}`}>
              <a>
                <div className="relative mb-10 overflow-hidden">
                  <div className="absolute w-full h-full z-10 opacity-60 bg-indigo-900 "></div>
                  <div className="absolute w-full h-full z-10 opacity-80 bg-indigo-900 flex flex-col justify-center items-center text-2xl text-center px-4">
                    <div>
                      <h3 className="text-white font-semibold">{item.title}</h3>
                      <p className="text-gray-50 text-lg mt-4 leading-relaxed hidden md:flex">
                        {item.description}
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

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="mt-20">
          <div className="text-4xl text-gray-900 font-semibold mb-4 dark:text-gray-400">
            Recent Posts
          </div>
          {data.posts?.map((post) => (
            <div
              className="grid grid-cols-1 md:grid-cols-4 py-6"
              key={post.slug}>
              <div className="mb-2 md:mb-0 md:col-span-1">
                <p className="text-gray-600 text-sm dark:text-gray-400">
                  {new Date(post.date).toDateString()}
                </p>
              </div>
              <div className="md:col-span-3">
                <Link href={`/blog/${post.slug}`}>
                  <a className="text-2xl font-semibold text-gray-900 hover:text-gray-700 transition-colors duration-300 dark:text-blue-700">
                    {post.title}
                  </a>
                </Link>
                <p className="text-gray-700 leading-relaxed dark:text-blue-800">
                  {post.description}
                </p>
                <div className="text-sm text-gray-900 font-semibold mt-1 dark:text-indigo-700">
                  {post.author.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
