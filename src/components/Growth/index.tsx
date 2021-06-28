import React from "react"
import { StaticImage } from 'gatsby-plugin-image'

import * as styles from './assets/styles.module.css'
import { Overlay } from '../Common'
import Graph from './assets/graph.svg'
import PdfDocumentIcon from '../../svg/pdf-document.svg'

const Growth = () => (
  <section className="relative xl:h-screen xl:min-h-270">
    <Overlay>
      <StaticImage
        style={{ height: "100%", width: "auto" }}
        imgStyle={{ objectFit: "cover" }}
        quality={85}
        alt="Развитие"
        src="./assets/bg.jpg"
        placeholder="blurred"
      />
    </Overlay>
    <Overlay>
      <div className="h-full" style={{
        background: "linear-gradient(180deg, rgba(83, 53, 119, 0.95) 0%, rgba(24, 13, 49, 0.95) 100%)"
        }}></div>
    </Overlay>
    <div className="container px-2 xl:px-0 flex flex-col py-12 xl:py-24 h-full mx-auto justify-between">
      <div className="text-white font-light">
        <h3 style={{
          textShadow: "0px 4px 12px rgba(43, 11, 66, 0.65)"
          }} 
          className="text-white text-2xl lg:text-3xl xl:text-4xl leading-none font-extrabold mb-9 xl:mb-14">Развитие</h3>
        <p className="mb-9">Стратегической целью компании на горизонте ближайших трех-пяти лет является усиление позиций на рынке лизинговых услуг и вхождение в ТОП-50 лизинговых компаний по размеру портфеля. Для этого в ближайшие два года планируется обеспечить рост портфеля до 2 млрд руб.</p>
        <p>Достижение целей - за счет работы в двух направлениях:</p>
        <ul className={styles.list}>
          <li>Оптимизация бизнес-процессов в рамках обеспечения необходимых источников финансирования</li>
          <li>Расширение клиентской базы</li>
        </ul>
      </div>
      <div>
        <Graph className="hidden sm:block mx-auto sm:max-w-full lg:max-w-auto lg:my-14" />
      </div>
      <div>
        <h3 style={{
            textShadow: "0px 4px 12px rgba(43, 11, 66, 0.65)"
            }} 
            className="text-white text-2xl lg:text-3xl xl:text-4xl leading-none font-extrabold mb-9 xl:mb-14 mt-14 sm:mt-0">Актуальные документы</h3>
        <div className="flex -mx-2 flex-wrap xl:h-32 content-between">
          <a href="/Бухгалтерская отчетность за 2020 г..pdf" download className="mb-4 xl:mb-0 flex sm:w-1/2 xl:w-3/12 px-2 items-center text-white hover:text-light-fucsia transition">
            <PdfDocumentIcon className="flex-none" style={{width: 42, height: 48}} />
            <span className="ml-4 font-light">Бухгалтерская отчетность за 2020 г.</span>
          </a>
          <a href="/Бухгалтерская отчетность ф.1 и ф.2 без квитанций.pdf" download className="mb-4 xl:mb-0 flex sm:w-1/2 xl:w-3/12 px-2 items-center text-white hover:text-light-fucsia transition">
            <PdfDocumentIcon className="flex-none" style={{width: 42, height: 48}} />
            <span className="ml-4 font-light">Бухгалтерская отчетность ф.1 и ф.2 без квитанций</span>
          </a>
          <a href="/Бухгалтерская отчетность ф.1,ф.2 с извещениями.pdf" download className="mb-4 xl:mb-0 flex sm:w-1/2 xl:w-3/12 px-2 items-center text-white hover:text-light-fucsia transition">
            <PdfDocumentIcon className="flex-none" style={{width: 42, height: 48}} />
            <span className="ml-4 font-light">Бухгалтерская отчетность ф.1,ф.2 с извещениями</span>
          </a>
          <a href="/Облигации на 2021 год.xlsx" download className="mb-4 xl:mb-0 flex sm:w-1/2 xl:w-3/12 px-2 items-center text-white hover:text-light-fucsia transition">
            <PdfDocumentIcon className="flex-none" style={{width: 42, height: 48}} />
            <span className="ml-4 font-light">Облигации на 2021 год</span>
          </a>
          <a href="/План по облигациям на 2021 г..docx" download className="mb-4 xl:mb-0 flex sm:w-1/2 xl:w-3/12 px-2 items-center text-white hover:text-light-fucsia transition">
            <PdfDocumentIcon className="flex-none" style={{width: 42, height: 48}} />
            <span className="ml-4 font-light">План по облигациям на 2021 г.</span>
          </a>
          <a href="/Солид-Лизинг итоги 2020 (апр 21).pptx" download className="mb-4 xl:mb-0 flex sm:w-1/2 xl:w-3/12 px-2 items-center text-white hover:text-light-fucsia transition">
            <PdfDocumentIcon className="flex-none" style={{width: 42, height: 48}} />
            <span className="ml-4 font-light">Солид-Лизинг итоги 2020 (апр 21)</span>
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Growth