"use client"

import { useRevealer } from '@/hooks/useRevealer'
import React from 'react'

const About = () => {
  useRevealer()

  return (
    <>
    <div className="revealer"></div>
      <div className="about">
        <div className="col">
          <h2>About Me</h2>
        </div>
        <div className="col">
          <h2>
          Hi, I'm Sang—a passionate web developer and designer with a love for crafting clean, intuitive digital experiences. With a background in both design and code, I enjoy bridging the gap between creativity and technology to build products that are both beautiful and functional.
          </h2>
          <div className="about-img">
            <img src="/img-01.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
