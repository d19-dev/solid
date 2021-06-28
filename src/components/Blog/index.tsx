import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from './styles.module.css'
import { Devider, Overlay } from "../../components/Common"
import BlogItem from './BlogItem'
import Calendar from './Calendar'

type BlogProps = {
  posts: Array<object>
}

const Blog = ({posts}: BlogProps) => (
  <section id="news" className="relative lg:h-screen lg:flex lg:items-center lg:min-h-270">
    <Overlay>
      <StaticImage
        imgStyle={{
          objectFit: "none",
          objectPosition: "right bottom",
        }}
        layout="fullWidth"
        alt="hey"
        src="../../images/blog-bg.jpg"
        placeholder="blurred"
        className="hidden lg:block"
      />
    </Overlay>
    <div className="container px-2 lg:px-0 py-12 lg:h-full mx-auto">
      <h3 style={{textShadow: "0px 4px 4px rgba(69, 27, 98, 0.15)"}} className="text-dark-fucsia text-2xl lg:text-3xl xl:text-4xl leading-none font-extrabold mb-14">Новости инвестора</h3>
      <div className="sm:flex sm:h-96 -mx-2">
        <div className="h-32 sm:h-full sm:w-6/12 lg:w-4/12 px-2">
          <div className="h-full shadow-2xl">
            <BlogItem {...posts[0]} />
          </div>
        </div>
        <div className="sm:flex sm:flex-col sm:w-6/12 lg:w-8/12 px-2">
          <div className="flex-grow flex-1">
            <div className="flex flex-col lg:flex-row h-full -mx-2">
              <div className="h-32 lg:h-auto mt-4 sm:mt-0 lg:mt-0 lg:w-6/12 px-2">
              <div className="h-full shadow-2xl">
                <BlogItem {...posts[1]} />
              </div>
              </div>
              <div className="h-32 lg:h-auto mt-4 sm:mt-0 lg:w-6/12 px-2">
                <div className="h-full shadow-2xl">
                  <BlogItem {...posts[2]} />
                </div>
              </div>
            </div>
          </div>
          <Devider className="hidden lg:block h-4" />
          <div className="flex-grow flex-1">
            <div className="flex h-full -mx-2">
              <div className="hidden sm:block lg:w-3/12 px-2">
                <div className="h-full shadow-2xl">
                  <BlogItem {...posts[3]} />
                </div>
              </div>
              <div className="hidden lg:block lg:w-6/12 px-2">
                <div className="h-full shadow-2xl">
                  <BlogItem {...posts[4]} />
                </div>
              </div>
              <div className="hidden lg:block lg:w-3/12 px-2">
                <div className="h-full shadow-2xl">
                  <BlogItem {...posts[5]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Devider className="hidden lg:block lg:h-4" />
      <div className="lg:flex lg:h-96 -mx-2">
        <div className="lg:w-8/12 px-2">
          <div className="h-full relative">
            <Overlay>
              <div className="h-full bg-white opacity-75"></div>
            </Overlay>
            <div className="p-6">
              <h3 className="font-bold text-xl text-dark-fucsia mb-7">Ближайшие события</h3>
              <Calendar />
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-4/12 px-2">
          <div className="flex flex-col h-full">
            <div className="flex-grow">
              <div className="flex h-full -mx-2">
                <div className="hidden lg:block lg:w-6/12 px-2">
                  <BlogItem {...posts[6]} />
                </div>
                <div className="hidden lg:block lg:w-6/12 px-2">
                  <div className="h-full shadow-2xl">
                    <BlogItem {...posts[7]} />
                  </div>
                </div>
              </div>
            </div>
            <Devider className="h-4" />
            <div className="flex-grow">
              <div className="flex h-full -mx-2">
                <div className="w-full px-2">
                  <div className="h-full shadow-2xl">
                    <BlogItem {...posts[8]} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Blog
