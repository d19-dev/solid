import React, { useState } from "react"
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './index.module.css'
import { Overlay } from '../Common'
import Graph from './assets/graph.svg'
import PdfDocumentIcon from '../../svg/pdf-document.svg'
import Slider from 'react-slick'
import { Post } from '../../@types'
import { filterByTerm } from '../../lib'
import NavigateDownIcon from '../../svg/navigate-down.svg'
import NavigateUpIcon from '../../svg/navigate-up.svg'

interface Props {
  posts: Post[] | []
}

const Growth: React.FC<Props> = ({
  posts,
}) => {
  const TERM = process.env.DOCUMENTS_SLUG || 'document'
  const documents = filterByTerm(posts, TERM)
  const [documentsToggled, toggleDocuments] = useState(false)
  const handleToggle = () => toggleDocuments(!documentsToggled)
  const documentsCount = (documentsToggled)? posts.length : 12
  return (
    <section className="relative">
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
          background: "linear-gradient(180deg, rgba(53, 37, 90, 0.95) 0%, rgba(18, 10, 39, 0.95) 100%)"
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
            {/* <li><a href="https://www.e-disclosure.ru/portal/company.aspx?id=37460&attempt=1" target="_blabk">Раскрытие информации</a></li> */}
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
          <div className={styles.slide}>
            {documents.slice(0, documentsCount).map((document: Post) => (
              <a href={document.excerpt.replace(/(<([^>]+)>)/gi, "")} target="_blank" className={styles.document} key={document.id}>
                <PdfDocumentIcon />
                <span>{document.title}</span>
              </a>
            ))}
          </div>
          <button className={styles.toggleDocumets} onClick={handleToggle}>
            
            {(documentsToggled)? <span>Свернуть</span>: <span>Все документы</span>}
            {(documentsToggled)? <NavigateUpIcon />: <NavigateDownIcon />}
            
          </button>
        </div>
      </div>
    </section>
  )
  }

export default Growth