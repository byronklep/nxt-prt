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
      style={{ ...style, display: 'block', background: 'transparent' }}
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
        <div className="rounded my-40 bg-indigo-700 p-10 ">
          <Slider {...settings}>
            <div className="text-white ml-20">
              <blockquote className="p-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote">
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
              </blockquote>
            </div>
            <div className="text-white ml-20">
              <blockquote className="p-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote">
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
              </blockquote>
            </div>
            <div className="text-white ml-20">
              <blockquote className="p-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote">
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
              </blockquote>
            </div>
          </Slider>
        </div>
      </>
    )
  }
}
