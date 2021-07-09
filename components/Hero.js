import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
      <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
        <h1 className="text-6xl text-gray-900 font-bold max-w-lg  dark:text-gray-300">
          Hello. <br />I am <span className="text-indigo-700"> Sam</span>.
        </h1>
        <p className="text-gray-700 font-semibold text-xl my-8  dark:text-gray-400">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Curabitur sodales ligula in libero. Sed
          dignissim lacinia nunc. Curabitur tortor.
        </p>
        <Link href="/about">
          <a>
            <button className="bg-transparent dark:bg-gray-700 dark:text-white dark:border-gray-500 dark:hover:bg-indigo-700 hover:bg-indigo-700 text-gray-900 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-gray-900 hover:border-transparent">
              Learn More
            </button>
          </a>
        </Link>
      </div>

      <div className="w-full lg:w-1/2 lg:py-6 text-center">
        <Image
          className="rounded-lg"
          src="/images/sam-front.jpg"
          height={300}
          width={300}
          alt="Sam"
        />
      </div>
    </div>
  )
}
