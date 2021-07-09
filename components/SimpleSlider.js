import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiNodeDotJs } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiRedux } from 'react-icons/si'
import { SiNextDotJs } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { SiGraphql } from 'react-icons/si'
import { SiBootstrap } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { SiGit } from 'react-icons/si'
import { SiHeroku } from 'react-icons/si'
import { SiNetlify } from 'react-icons/si'

export default class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 5000,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <div className=" my-10 text-center">
        <Slider {...settings}>
          <div className="p-2 flex flex-col">
            <span>
              <SiHtml5 className="mx-auto" size={40} />
              <p className="mt-2 icon-font">HTML</p>
            </span>
          </div>
          <div className="p-2 flex flex-col">
            <span>
              <SiCss3 className="mx-auto" size={40} />
              <p className="mt-2 icon-font">CSS</p>
            </span>
          </div>
          <div className="p-2 flex flex-col">
            <span>
              <SiJavascript className="mx-auto" size={40} />
              <p className="mt-2 icon-font">JavaScript</p>
            </span>
          </div>
          <div className="p-2 flex flex-col">
            <span>
              <SiNodeDotJs className="mx-auto" size={40} />
              <p className="mt-2 icon-font">Node</p>
            </span>
          </div>
          <div className="p-2 flex flex-col">
            <span>
              <SiReact className="mx-auto" size={40} />
              <p className="mt-2 icon-font">React</p>
            </span>
          </div>
          <div className="p-2 flex flex-col">
            <span>
              <SiNextDotJs className="mx-auto" size={40} />
              <p className="mt-2 icon-font">Next</p>
            </span>
          </div>
          <div className="p-2 flex flex-col">
            <span>
              <SiRedux className="mx-auto" size={40} />
              <p className="mt-2 icon-font">Redux</p>
            </span>
          </div>
          <div className="p-2 flex flex-col">
            <span>
              <SiMongodb className="mx-auto" size={40} />
              <p className="mt-2 icon-font">Mongo</p>
            </span>
          </div>
          <div className="p-2 flex flex-col">
            <span>
              <SiGraphql className="mx-auto" size={40} />
              <p className="mt-2 icon-font">GraphQL</p>
            </span>
          </div>
          <div className="p-2 flex flex-col">
            <span>
              <SiBootstrap className="mx-auto" size={40} />
              <p className="mt-2 icon-font">Bootstrap</p>
            </span>
          </div>
          <div className="p-2 flex flex-col">
            <span>
              <SiTailwindcss className="mx-auto" size={40} />
              <p className="mt-2 icon-font">Tailwind</p>
            </span>
          </div>
          <div className="p-2 flex flex-col">
            <span>
              <SiGit className="mx-auto" size={40} />
              <p className="mt-2 icon-font">Git</p>
            </span>
          </div>
          <div className="p-2 flex flex-col">
            <span>
              <SiHeroku className="mx-auto" size={40} />
              <p className="mt-2 icon-font">Heroku</p>
            </span>
          </div>
          <div className="p-2 flex flex-col">
            <span>
              <SiNetlify className="mx-auto" size={40} />
              <p className="mt-2 icon-font">Netlify</p>
            </span>
          </div>
        </Slider>
      </div>
    )
  }
}
