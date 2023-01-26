import * as React from 'react'
import { Element, Link } from 'react-scroll'
import { graphql } from "gatsby"
import { slide as Menu } from 'react-burger-menu'
import Seo from "../components/seo"
import Main from '../components/Main'
import Ad from '../components/Ad'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Blog from '../components/Blog'
import Growth from '../components/Growth'
import Footer from '../components/Footer'
import LogoIcon from '../svg/logo.svg'
import { Overlay } from '../components/Common'

const IndexPage = ({ data, location }) => {
  const posts = data.allWpPost.nodes
  const [menuIsOpen, setMenuOpened] = React.useState(false)
  const toggleMainMenu = () => setMenuOpened(!menuIsOpen)
  const closeMainMenu = () => setMenuOpened(false)
  const handleStateChange = state => setMenuOpened(state.isOpen)  
  return (
    <div id="outer-container">
      <Menu
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        right
        isOpen={menuIsOpen}
        onStateChange={(state) => handleStateChange(state)}
      >
        <div className="h-full">
          <Overlay>
            <div className="h-full" style={{backgroundColor: "#180E30"}}></div>
          </Overlay>
          <div className="flex h-full py-12 flex-col items-center justify-between">
            <div>
              <LogoIcon className="w-36 h-36" />
            </div>
            <div className="flex flex-col items-center text-white justify-center font-poiret text-2xl">
              <Link onClick={() => closeMainMenu()} className="block py-2 hover:text-light-fucsia transition cursor-pointer" to="about">о компании</Link>
              <Link onClick={() => closeMainMenu()} className="block py-2 hover:text-light-fucsia transition cursor-pointer" to="news">новости инвестора</Link>
              <Link onClick={() => closeMainMenu()} className="block py-2 hover:text-light-fucsia transition cursor-pointer" to="growth">развитие</Link>
              <a 
                onClick={() => closeMainMenu()}
                className="block py-2 hover:text-light-fucsia transition cursor-pointer"
                href="https://www.e-disclosure.ru/portal/company.aspx?id=37460&attempt=1"
                target="_blank">раскрытие информации</a>
              <Link onClick={() => closeMainMenu()} className="block py-2 hover:text-light-fucsia transition cursor-pointer" to="contacts">контакты</Link>
              <a 
                onClick={() => closeMainMenu()}
                className="block py-2 hover:text-light-fucsia transition cursor-pointer"
                href="http://solid-leasing.ru"
                target="_blank">основной сайт</a>
            </div>
            <div>
              <div className="leading-loose px-8 text-white font-poiret">
                <p>
                  <a className="hover:text-light-fucsia transition" href="tel:84957757710">+7 (495) 775-77-10</a>
                </p>
                <p>
                  <a className="hover:text-light-fucsia transition" href="mailto:bonds@solid-leasing.ru">bonds@solid-leasing.ru</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Menu>
      <Seo title="Новые рубежи" />
      <div id="page-wrap">
        <Element name="main">
          <Main toggleMainMenu={toggleMainMenu} />
        </Element>
        {/* <Element name="ad">
          <Ad></Ad>
        </Element> */}

        <Element name="about">
          <About />
        </Element>
        <Element name="portfolio">
          <Portfolio />
        </Element>
        <Element name="news">
          <Blog posts={posts} />
        </Element>
        <Element name="growth">
          <Growth posts={posts} />
        </Element>
        <Element name="contacts">
          <Footer />
        </Element>
      </div>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allWpPost(sort: {fields: date, order: DESC}) {
      nodes {
        id
        title
        excerpt
        databaseId
        date
        featuredImage {
          node {
            id
            altText
            srcSet
            sizes
            sourceUrl
          }
        }
        terms {
          nodes {
            name
            slug
          }
        }
        tags {
          nodes {
            name
            slug
          }
        }
      }
    }
  }  
`
