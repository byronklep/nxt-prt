import React from 'react'
import Image from 'next/image'

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1)
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist">
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 1
                    ? 'text-white bg-' + color + '-600'
                    : 'text-' + color + '-600 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(1)
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist">
                Bio
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 2
                    ? 'text-white bg-' + color + '-600'
                    : 'text-' + color + '-600 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(2)
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist">
                Education
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 3
                    ? 'text-white bg-' + color + '-600'
                    : 'text-' + color + '-600 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab(3)
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist">
                Interest
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="mx-auto p-5 md:p-2">
                      <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits.
                        <br />
                        <br />
                        Class aptent taciti sociosqu ad litora torquent per
                        conubia nostra, per inceptos himenaeos. Curabitur
                        sodales ligula in libero. Sed dignissim lacinia nunc.
                        Curabitur tortor. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per inceptos himenaeos.
                        Curabitur sodales ligula in libero. Sed dignissim
                        lacinia nunc. Curabitur tortor.
                      </p>
                    </div>
                    <div className="mx-auto">
                      <Image
                        src="https://via.placeholder.com/150"
                        height={200}
                        width={500}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <div className="grid md:grid-cols-3 gap-2">
                    <div className="mx-auto p-5 md:p-2">
                      <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits.
                        <br />
                        <br />
                        Class aptent taciti sociosqu ad litora torquent per
                        conubia nostra, per inceptos himenaeos. Curabitur
                        sodales ligula in libero. Sed dignissim lacinia nunc.
                        Curabitur tortor. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per inceptos himenaeos.
                        Curabitur sodales ligula in libero. Sed dignissim
                        lacinia nunc. Curabitur tortor.
                      </p>
                    </div>
                    <div className="mx-auto">
                      <Image
                        src="https://via.placeholder.com/150"
                        height={200}
                        width={500}
                        alt=""
                      />
                    </div>
                    <div className="mx-auto p-5 md:p-2">
                      <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits.
                        <br />
                        <br />
                        Class aptent taciti sociosqu ad litora torquent per
                        conubia nostra, per inceptos himenaeos. Curabitur
                        sodales ligula in libero. Sed dignissim lacinia nunc.
                        Curabitur tortor. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per inceptos himenaeos.
                        Curabitur sodales ligula in libero. Sed dignissim
                        lacinia nunc. Curabitur tortor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="mx-auto">
                    <Image
                      src="https://via.placeholder.com/150"
                      height={200}
                      width={500}
                      alt=""
                    />
                  </div>
                  <div className="mx-auto p-5 md:p-2">
                    <p>
                      Collaboratively administrate empowered markets via
                      plug-and-play networks. Dynamically procrastinate B2C
                      users after installed base benefits.
                      <br />
                      <br />
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos. Curabitur sodales
                      ligula in libero. Sed dignissim lacinia nunc. Curabitur
                      tortor. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos. Curabitur
                      sodales ligula in libero. Sed dignissim lacinia nunc.
                      Curabitur tortor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function TabsRender() {
  return (
    <>
      <Tabs color="indigo" />
    </>
  )
}
