import React from 'react'
import ProgressBar from './ProgessBar'
import ProgessBarShadow from '../../svg/progressbar-shadow.svg'
import { StaticImage } from 'gatsby-plugin-image'

export type PortfolioItemProps = {
  title: string,
  percentage: number
}

const PortfolioItem = ({ title, percentage }: PortfolioItemProps) => (
  <div className="relative">
    <div className="px-7">
      <ProgressBar percentage={percentage} />
    </div>
    <div className="relative">
      <div className="absolute -top-1.5 -z-10">
        <StaticImage
          imgStyle={{ objectFit: "cover" }}
          placeholder="none"
          quality={100}
          alt="hey"
          src="./assets/shadow.png"
        />
      </div>
    </div>
    <div className="mt-3 text-center">
      <h6 className="font-poiret text-lg sm:text-xl text-white tracking-wide">{title}</h6>
    </div>
  </div>
)

export default PortfolioItem