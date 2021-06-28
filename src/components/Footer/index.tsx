import React from 'react'

import LogoIcon from './assets/logo.svg'
import { StaticImage } from "gatsby-plugin-image"
import { Overlay } from "../Common"

const Footer = () => (
  <footer className="py-12 xl:py-24" style={{backgroundColor: "#120F1A"}} >
    <div className="container px-2 xl:px-0 mx-auto text-white font-light">
      <h3 style={{
        textShadow: "0px 4px 4px rgba(69, 27, 98, 0.15)"
        }} 
        className="text-white text-2xl lg:text-3xl xl:text-4xl leading-none font-extrabold mb-9">Контакты</h3>
      <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="md:w-1/2 lg:w-5/12 leading-loose">
          <p>123007, Москва, Хорошевское шоссе, дом 32 А, пом. XXVIII</p>
          <p>Филиал: 420107, Казань, ул. Петербургская, д. 78</p>
          <p>
            <a className="hover:text-light-fucsia transition" href="tel:84957757710">+7 (495) 775-77-10</a>
          </p>
          <p>
            <a className="hover:text-light-fucsia transition" href="mailto:bonds@solid-leasing.ru">bonds@solid-leasing.ru</a>
          </p>
        </div>
        <div className="md:w-1/2 lg:w-4/12">
          <p className="font-ligth text-white mb-5 leading-loose">Подпишитесь на рассылку новостей и событий</p>
          <form className="flex" method="POST" action="https://cp.unisender.com/ru/subscribe?hash=6wojxmuu198tuhisio8ma5opcpdepnusr9oznfbhjt5q74yjuw3jo" name="subscribtion_form">
            <input placeholder="Адрес эл. почты" className="w-8/12 md:w-3/4 border rounded-l-sm p-2.5 bg-gray-50 leading-none focus:outline-none text-deep-purple" style={{borderColor: "rgba(49, 21, 76, 0.42)"}} type="text" name="email" />
            <input className="w-4/12 md:w-1/4 border rounded-r-sm bg-gray-50 text-deep-purple" style={{borderColor: "rgba(49, 21, 76, 0.42)"}} type="submit"  value="Подписаться" />
            <input type="hidden" name="charset" value="UTF-8" />
            <input type="hidden" name="default_list_id" value="1" />
            <input type="hidden" name="overwrite" value="2" />
            <input type="hidden" name="is_v5" value="1" />
          </form>
        </div>
        <div className="hidden lg:flex w-3/12 justify-end">
            <LogoIcon />
        </div>
      </div>
    </div>
  </footer>
)

export default Footer