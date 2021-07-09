import React, { Component } from 'react'
import Slider from 'react-slick'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'transparent' }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', color: 'red' }}
      onClick={onClick}
    />
  )
}

export default class Testimonials extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    }
    return (
      <>
        <div className="container rounded my-40 bg-indigo-700  ">
          <Slider {...settings}>
            <div className="mx-auto px-4 xl:px-0 container pt-10 lg:pt-20">
              <div className="text-color f-f-l">
                <h1 className="text-xl lg:text-4xl tracking-tighter leading-relaxed lg:leading-snug f-f-l font-black text-center">
                  &quot;Thanks guys, keep up the good work! <br /> I&apos;d be
                  lost without Prodify. The very <br /> best. Prodify is both
                  attractive and <br /> highly adaptable.&quot;
                </h1>
                <h1 className="text-indigo-700 text-xl lg:text-2xl tracking-tighter leading-relaxed lg:leading-snug f-f-l font-black text-center pt-5 lg:pt-20">
                  - Ben P.
                </h1>
              </div>
            </div>
            <div className="mx-auto px-4 xl:px-0 container pt-10 lg:pt-20">
              <div className="text-color f-f-l">
                <h1 className="text-xl lg:text-4xl tracking-tighter leading-relaxed lg:leading-snug f-f-l font-black text-center">
                  &quot;Thanks guys, keep up the good work! <br /> I&apos;d be
                  lost without Prodify. The very <br /> best. Prodify is both
                  attractive and <br /> highly adaptable.&quot;
                </h1>
                <h1 className="text-indigo-700 text-xl lg:text-2xl tracking-tighter leading-relaxed lg:leading-snug f-f-l font-black text-center pt-5 lg:pt-20">
                  - Ben P.
                </h1>
              </div>
            </div>
            <div className="mx-auto px-4 xl:px-0 container pt-10 lg:pt-20">
              <div className="text-color f-f-l">
                <h1 className="text-xl lg:text-4xl tracking-tighter leading-relaxed lg:leading-snug f-f-l font-black text-center">
                  &quot;Thanks guys, keep up the good work! <br /> I&apos;d be
                  lost without Prodify. The very <br /> best. Prodify is both
                  attractive and <br /> highly adaptable.&quot;
                </h1>
                <h1 className="text-indigo-700 text-xl lg:text-2xl tracking-tighter leading-relaxed lg:leading-snug f-f-l font-black text-center pt-5 lg:pt-20">
                  - Ben P.
                </h1>
              </div>
            </div>
            {/* <blockquote className="p-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote">
                <p className="mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum placerat, lorem id bibendum egestas.
                </p>
                <cite>
                  -
                  <a href="..." target="_blank" rel="noopener noreferrer">
                    John Doe
                  </a>
                  <br />
                  Digital Crafts
                </cite>
              </blockquote> */}
          </Slider>
        </div>
      </>
    )
  }
}
