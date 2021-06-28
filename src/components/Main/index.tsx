import React from 'react'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { StaticImage } from 'gatsby-plugin-image'

import { Overlay, Devider } from '../Common'
import * as styles from './assets/styles.module.css'
import LogoIcon from '../../svg/logo.svg'
import BurgerIcon from '../../svg/burger.svg'
import ExternalLinkIcon from '../../svg/external-link.svg'
import DotNav from './DotNav'

const Main = ({toggleMainMenu}) => (
  <section className="relative h-screen">
    <Overlay>
      <StaticImage
        className="animate-zoom-in"
        imgStyle={{
          objectFit: "none",
          objectPosition: "right bottom",
        }}
        layout="fixed"
        alt="hey"
        src="../../images/main-bg.jpg"
      />
    </Overlay>
    <Overlay>
      <div className={styles.overlayGradient}></div>
    </Overlay>
    <div className="flex h-full">
      <div className="absolute top-4 left-4 lg:hidden">
        <LogoIcon />
      </div>
      <div className="absolute top-8 right-8 lg:hidden">
        <button className="focus:outline-none" onClick={() => toggleMainMenu()}>
          <BurgerIcon className="w-8" />
        </button>
      </div>
      <aside className="hidden lg:block w-36">
        <div className="flex flex-col h-full">
          <div className="flex h-20 lg:h-34 justify-center items-center">
            <LogoIcon />
          </div>
          <div className="flex-grow">
            <div className="relative flex h-full justify-center items-center">
              <div className="hidden xl:block fixed z-10">
                <DotNav />
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div className="flex-grow">
        <div className="flex h-full flex-col">
          <nav className="hidden lg:flex justify-center items-center h-34">
            <ul className="flex justify-between w-214 font-poiret text-2xl text-white">
              <li>
                <Link to="about" smooth={true} className="cursor-pointer hover:text-light-fucsia transition">о компании</Link>
              </li>
              <li>
              <Link to="news" smooth={true}  className="cursor-pointer hover:text-light-fucsia transition">новости инвестора</Link>
              </li>
              <li>
              <Link to="growth" smooth={true}  className="cursor-pointer hover:text-light-fucsia transition">развитие</Link>
              </li>
              <li>
              <Link to="contacts" smooth={true}  className="cursor-pointer hover:text-light-fucsia transition">контакты</Link>
              </li>
              <li>
                <a href="http://solid-leasing.ru" target="_blank" className="cursor-pointer hover:text-light-fucsia transition">
                  <div className="flex justify-center items-center">
                    <span>основной сайт</span>
                    <ExternalLinkIcon className="ml-2" />
                  </div>
                </a>
              </li>
            </ul>
          </nav>
          <article className="h-full flex-grow">
            <div className="flex h-full justify-center items-center">
              <div>
                <h1 className={styles.siteTitle}>Новые рубежи</h1>
                <Devider className="h-2 lg:h-12" />
                <h2 className="font-poiret text-2xl lg:text-5xl text-white text-center">Солид–Лизинг и наши инвесторы</h2>
              </div>
            </div>
          </article>
        </div>
      </div>
      <aside className="hidden lg:block w-36">
        <div className="flex flex-col h-full">
          <div className="flex h-16 lg:h-34 justify-center items-center">
            <button className="focus:outline-none" onClick={() => toggleMainMenu()}>
              <BurgerIcon />
            </button>
          </div>
          <div className="hidden lg:block flex-grow">
            <div className="flex h-full justify-center items-center">
              <div className="transform -rotate-90">
                <ul className="flex w-40 justify-between font-bold text-white ">
                  <li>
                    <a href="mailto:bonds@solid-leasing.ru">email</a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/solid_leasing/" target="_blank">instagram</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </section>
)

export default Main