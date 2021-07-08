import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    // <section className="text-gray-600 body-font">
    //   <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    //     <Image
    //       className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
    //       alt="hero"
    //       src="/images/6K1A0537.jpg"
    //       height={400}
    //       width={300}
    //     />
    //     <div className="text-center lg:w-2/3 w-full">
    //       <h1 className="text-6xl text-gray-900 text-center font-bold max-w-lg  dark:text-gray-300">
    //         Hello. <br />I am
    //         <span className="text-indigo-700"> Sam</span>.
    //       </h1>
    //       <p className="mb-8 leading-relaxed">
    //         Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
    //         tousled. Chambray dreamcatcher trust fund, kitsch vice godard
    //         disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
    //         Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan
    //         photo booth af fingerstache pitchfork.
    //       </p>
    //       <div className="flex justify-center">
    //         <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
    //           Button
    //         </button>
    //         <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
    //           Button
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </section>

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
          className="rounded"
          src="/images/sam-front.jpg"
          height={300}
          width={300}
          alt="Sam"
        />
      </div>
    </div>

    // <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 flex flex-col lg:items-center py-20">
    //   <h1 className="text-6xl text-gray-900 text-center font-bold max-w-lg  dark:text-gray-300">
    //     Hello. <br />I am
    //     <span className="text-indigo-700"> Sam</span>.
    //   </h1>

    //   <p className="text-gray-700 font-semibold text-xl mt-8 lg:text-center dark:text-gray-400">
    //     Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
    //     inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim
    //     lacinia nunc. Curabitur tortor.
    //   </p>
    // </div>
  )
}
