import Image from 'next/image'
import { Parallax, Background } from 'react-parallax'
import SimpleSlider from '../components/SimpleSlider'

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
            <p className="text-white font-semibold text-xl m-10 lg:mx-20 dark:text-gray-400">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Curabitur sodales ligula in
              libero. Sed dignissim lacinia nunc. Curabitur tortor. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur sodales ligula in libero. Sed
              dignissim lacinia nunc. Curabitur tortor.
            </p>
          </div>
        </div>
        <div style={{ height: '100px' }} />
      </Parallax>
      <SimpleSlider />
    </>
  )
}
