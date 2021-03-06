import Image from 'next/image'
import { Parallax, Background } from 'react-parallax'
import SimpleSlider from '../components/SimpleSlider'
import Tabs from '../components/Tabs'
import Testimonials from '../components/Testimonials'

function activeTab(element) {
  let siblings = element.parentNode.querySelectorAll('li')
  for (let item of siblings) {
    item.classList.add('hover:bg-indigo-50')
    item.classList.remove('text-indigo-700')
    item.classList.remove('bg-indigo-100')
  }
  element.classList.remove('text-gray-600')
  element.classList.add('text-indigo-700')
  element.classList.add('bg-indigo-100')
}

export default function about() {
  return (
    <>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={'/images/space-us.jpeg'}
        bgImageAlt="Tech"
        strength={-200}>
        <div className="container mx-auto ">
          <div className="w-full mt-40 lg:py-6 text-center">
            <Image
              className="rounded"
              src="/images/sam-front.jpg"
              height={300}
              width={280}
              alt="Sam"
            />
            <p className="text-white font-semibold text-lg md:text-xl m-10 lg:mx-20 dark:text-gray-400">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Curabitur sodales ligula in
              libero. Sed dignissim lacinia nunc. Curabitur tortor. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur sodales ligula in libero. Sed
              dignissim lacinia nunc. Curabitur tortor.
            </p>
          </div>
        </div>
        <div className="h-auto" />
      </Parallax>
      <SimpleSlider />
      <div className="container mx-auto my-20">
        <Tabs />
        <Testimonials />
      </div>
    </>
  )
}
