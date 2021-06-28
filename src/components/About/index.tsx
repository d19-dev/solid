import React, { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Slider from 'react-slick'

import * as styles from './assets/styles.module.css'
import { List, ListItem, Overlay } from '../Common'
import PortfolioCells from '../Portfolio/assets/overlay.svg'
import AdvantagesIcon from './AdvantagesIcon'

const History = () => (
  <div>
    <p className="mb-4">ООО «Солид-Лизинг» – на рынке лизинговых услуг с 2004 года. Компания – активный, развивающийся участник лизингового рынка РФ; За 16 лет работы клиентами компании стали более 330 организаций, представляющих разные сферы бизнеса, а география предоставления лизинговых услуг – от Камчатки до Калининграда.</p>
    <p>В июне 2017 года компания разместила коммерческие облигаций компании. Лето 2018 года – выход на биржевой рынок(утверждена программа биржевых облигаций объемом 20 млрд руб.)</p>
  </div>
)

const Now = () => (
  <div>
    <p className="mb-4">ООО «Солид-Лизинг» - универсальная лизинговая компания, входящая в топ-100 лизинговых компаний. Рыночная ниша – предоставление в лизинг спецтехники, грузового автотранспорта, полиграфического оборудования, оформление сложно структурированных сделок. Компания ориентирована на клиентов малого и среднего бизнеса, как самый инвестиционно- привлекательный и перспективный сегмент.</p>
    <p className="mb-2">Перечень услуг, предоставляемых в рамках лизинговой деятельности:</p>
    <ul className={styles.list}>
      <li>финансовый и операционный лизинг.</li>
      <li>постановка и снятие автотранспорта в ГИБДД.</li>
      <li>страхование имущества в страховых компаниях ТОП-5.</li>
      <li>учет предмета лизинга на балансе лизинговой компании.</li>
    </ul>
  </div>
)

const Mission = () => (
  <div>
    <p className="mb-4">Миссия компании – реализация эффективных лизинговых проектов во всех регионах России. Ценности компании: </p>
    <ul className={styles.list}>
      <li>Ответственность – компания выстраивает долгосрочные отношения с клиентами и партнерами, исполняя в срок все свои обязательства.</li>
      <li>Доверие и честность – основа взаимоотношений с партнерами, контрагентами, клиентами и персоналом.</li>
      <li>Персонал – сотрудники создают основу репутации компании, обеспечивают достижение поставленных целей.</li>
      <li>Профессионализм – опыт, ответственность, гибкость в принятии решений, нацеленность на интересы клиента и на конечный результат.</li>
    </ul>
  </div>
)

const About = () => {
  const [currentTab, setCurrentTab] = useState<'history' | 'now' | 'mission'>('now')
  const slickSettings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows : false,
    appendDots: dots => (
      <div>
        <ul style={{bottom: "0"}}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="h-full"></div>
    )
  };
  return (
    <section className="relative lg:h-screen lg:min-h-270">
      <Overlay>
        <StaticImage
          imgStyle={{
            objectFit: "none",
            objectPosition: "right bottom",
          }}
          quality={90}
          layout="fixed"
          alt="hey"
          src="../../images/about-bg.jpg"
          placeholder="blurred"
          className="hidden lg:block"
        />
      </Overlay>
      <div className="container px-2 flex flex-col py-12 lg:px-0 lg:py-24 h-full mx-auto justify-between">
        <div>
          <nav className="lg:w-6/12 xl:w-5/12 mb-8">
            <ul className="block lg:flex justify-between text-xl text-deep-purple leading-none">
              <li>
                <button className={styles.navItem + ' ' + (currentTab === 'history' && styles.active)} onClick={() => setCurrentTab('history')}>История компании</button>
              </li>
              <li>
                <button className={styles.navItem + ' ' + (currentTab === 'now' && styles.active)} onClick={() => setCurrentTab('now')}>Солид–Лизинг сегодня</button>
              </li>
              <li>
                <button className={styles.navItem + ' ' + (currentTab === 'mission' && styles.active)} onClick={() => setCurrentTab('mission')}>Миссия</button>
              </li>
            </ul>
          </nav>
          <article className="mb-12 lg:mb-0 xl:w-8/12 font-light text-black min-h-60 ">
            { currentTab === 'history' && <History />}
            { currentTab === 'now' && <Now />}
            { currentTab === 'mission' && <Mission />}
          </article>
        </div>
        <div className="-mx-2 md:mx-0">
          <div className="relative h-72 md:h-48 shadow-md">
            <Overlay>
              <StaticImage
                imgStyle={{
                  objectFit: "contain",
                  objectPosition: "right bottom",
                }}
                quality={95}
                layout="fixed"
                alt="hey"
                src="./assets/slider-bg.jpg"
                placeholder="blurred"
              />
            </Overlay>
            <Overlay>
              <div className="h-full" style={{background: "rgba(24, 13, 49, 0.75)"}}></div>
            </Overlay>
            <Overlay>
              <PortfolioCells style={{top: "-135%"}} className="absolute animate-zoom-in"/>
            </Overlay>
            <Slider {...slickSettings}>

              <div>
                <h5 className="py-12 min-h-48 text-white text-2xl font-extrabold text-center mx-auto max-w-4xl"
                  style={{textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>1,16 млрд рублей привлечено и 269 697 301 рублей выплачено</h5>
              </div>
              <div>
                <h5 className="py-12 min-h-48 text-white text-2xl font-extrabold text-center mx-auto max-w-4xl"
                  style={{textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>6 выпусков биржевых облигаций – 48 выплат по купону</h5>
              </div>
              <div>
                <h5 className="py-12 min-h-48 text-white text-2xl font-extrabold text-center mx-auto max-w-4xl"
                  style={{textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>Более 500 инвесторов и 7 оферт успешно пройдено</h5>
              </div>
              <div>
                <h5 className="py-12 min-h-48 text-white text-2xl font-extrabold text-center mx-auto max-w-4xl"
                  style={{textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>Прирост лизингового портфеля с 708 600 000 до 1 300 000 000 за период с июля 2018 по январь 2021</h5>
              </div>
              
            </Slider>
          </div>
        </div>
        <div className="mt-12 lg:mt-0">
          <h3 style={{textShadow: "0px 4px 4px rgba(69, 27, 98, 0.15)"}} className="text-dark-fucsia text-2xl lg:text-3xl xl:text-4xl leading-none font-extrabold mb-16">Наши преимущества</h3>
          <List className="flex-wrap w-full lg:h-40 content-between">
            {[
              {icon: 'document', text: 'Электронный документооборот'},
              {icon: 'transparency', text: 'Отсутствие скрытых комиссий'},
              {icon: 'gift', text: 'Субсидии Минпромторга до 12,5%'},
              {icon: 'income', text: 'Значительные скидки от поставщиков'},
              {icon: 'individual', text: 'Индивидуальный подход'},
              {icon: 'personal', text: 'Скоринговая система оценки по сделкам до 5 млн рублей'},
              
            ].map(item => {
                return (
                  <ListItem className="flex-col mb-8 xl:mb-0 w-1/2 lg:flex-row xl:w-4/12 items-center">
                    <AdvantagesIcon iconName={item.icon} style={{width: 54, height: 54}} className="flex-none mb-2 lg:mb-0 lg:mr-14" />
                    <span className="font-poiret text-lg text-center lg:text-left lg:text-xl text-black">{item.text}</span>
                  </ListItem>
                )
              })
            }
          </List>
        </div>
      </div>
  </section>
  )
}

export default About