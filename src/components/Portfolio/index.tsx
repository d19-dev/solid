import React from "react"

import { StaticImage } from 'gatsby-plugin-image'
import { Devider, Overlay } from '../../components/Common'
import PortfolioItem, { PortfolioItemProps } from './PortfolioItem'
import PortfolioCells from './assets/overlay.svg'
import Map from './assets/map.svg'

const portfolio: Array<PortfolioItemProps> = [
  {
    title: 'Спецтехника',
    percentage: 53.5
  },
  {
    title: 'Грузовой транспорт',
    percentage: 17.0
  },
  {
    title: 'Недвижимость',
    percentage: 15.0
  },
  {
    title: 'Оборудование',
    percentage: 9.1
  },
  {
    title: 'Жд вагоны',
    percentage: 2.8
  },
  {
    title: 'Легковой транспорт',
    percentage: 2.6
  },
  
]

const Portfolio = () => (
  <section className="relative lg:h-screen lg:min-h-270">
    <Overlay>
      <div className="h-full" style={{
        background: "rgb(69,27,98)"
      }}></div>
    </Overlay>
    <Overlay>
      <div className="h-full" style={{
        background: "radial-gradient(circle, rgba(69,27,98,0.49) 0%, rgba(47,20,73,0.88) 50%, rgba(24,14,48,1) 100%)"
        }}></div>
    </Overlay>
    <Overlay>
      <div className="h-full" style={{
        background: "linear-gradient(180deg, rgba(12,6,23,1) 0%, rgba(33,16,59,0.95) 82%, rgba(49,21,76,1) 90%, rgba(49,21,76,0.73) 95%, rgba(33,16,59,1) 100%)"
        }}></div>
    </Overlay>
    <Overlay>
      <PortfolioCells className="hidden lg:block mt-36 mx-auto animate-zoom-in"/>
    </Overlay>
    <div className="container flex flex-col px-2 lg:px-0 py-12 lg:py-24 h-full mx-auto justify-between">
      <h3 style={{
            textShadow: "0px 4px 12px rgba(43, 11, 66, 0.65)"
            }} 
            className="mb-16 lg:mb-0 text-white text-2xl lg:text-3xl xl:text-4xl leading-none font-extrabold">Лизинговый портфель</h3>
      <div className="relative flex-grow">
        <Map className="hidden lg:block mx-auto" style={{height: 594, filter: "drop-shadow(0px 4px 32px #110B1D)"}} />
        {/* <Overlay>
          <StaticImage
            style={{ height: "100%", width: "100%" }}
            imgStyle={{ objectFit: "contain" }}
            quality={100}
            placeholder="none"
            alt="hey"
            src='./assets/map.svg'
          />
        </Overlay> */}
      </div>
      <div className="flex flex-col sm:flex-row lg:hidden justify-between">
        <div>
          <p className="font-poiret text-xl text-white sm:py-2">Центральный ФО: 43,1 %</p>
          <p className="font-poiret text-xl text-white sm:py-2">Дальневосточный ФО: 36,9 %</p>
          <p className="font-poiret text-xl text-white sm:py-2">Северо-западный ФО: 9,3 %</p>
        </div>
        <div className="mb-8">
          <p className="font-poiret text-xl text-white sm:py-2">Уральский ФО: 4,8 %</p>
          <p className="font-poiret text-xl text-white sm:py-2">Сибирский ФО: 3,2 %</p>
          <p className="font-poiret text-xl text-white sm:py-2">Приволжский ФО: 2,1 %</p>
          <p className="font-poiret text-xl text-white sm:py-2">Южный ФО: 0,6 %</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row text-white font-light justify-between mb-12">
        <div>
          <p>Лизинговый портфель: 1,319 млрд рублей</p>
          <p>Более 170 действующих договоров</p>
        </div>
        <div className="">
          <p>Средняя сумма сделки: 13 млн рублей</p>
          <p>Собственный капитал: 190 млн рублей</p>
        </div>
      </div>
      {/* <Devider className="flex-none h-14" /> */}
      <div className="flex-none">
        <div className="flex flex-wrap -mx-2">
          {portfolio.map((portfolioItem, index) => {
            return (
              <div className="w-6/12 sm:w-4/12 lg:w-2/12 px-2 mb-8 lg:mb-0" key={index}>
                <PortfolioItem {...portfolioItem} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </section>
)

export default Portfolio