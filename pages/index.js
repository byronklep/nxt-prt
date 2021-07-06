import { getPostsAndPortfolios } from '../lib/data'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

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
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
        {data.portfolios?.map((item) => (
          <div key={item.slug}>
            <Link href={`/portfolio/${item.slug}`}>
              <a>
                <div className="relative mb-10 overflow-hidden">
                  <div className="absolute w-full h-full z-10 opacity-60 bg-indigo-900 "></div>
                  <div className="absolute w-full h-full z-10 opacity-60 bg-indigo-900 flex flex-col justify-center items-center text-2xl">
                    <div>
                      <h3 className="text-white font-semibold">{item.title}</h3>
                      <p className="text-gray-50 text-lg">{item.description}</p>
                    </div>
                  </div>
                  <Image
                    src={item.coverImage.url}
                    height={item.coverImage.height}
                    width={item.coverImage.width}
                    alt=""
                    className="absolute"
                  />
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="mt-10">
          {data.posts?.map((post) => (
            <div
              className="grid grid-cols-1 md:grid-cols-4 py-6"
              key={post.slug}>
              <div className="mb-2 md:mb-0 md:col-span-1">
                <p className="text-gray-600 text-sm">
                  {new Date(post.date).toDateString()}
                </p>
              </div>
              <div className="md:col-span-3">
                <Link href={`/blog/${post.slug}`}>
                  <a className="text-2xl font-semibold text-gray-900 hover:text-gray-700 transition-colors duration-300">
                    {post.title}
                  </a>
                </Link>
                <p className="text-gray-700 leading-relaxed">
                  {post.description}
                </p>
                <div className="text-sm text-gray-900 font-semibold mt-1 ">
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
