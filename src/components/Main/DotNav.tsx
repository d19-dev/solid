import React from 'react'
import { Link } from 'react-scroll'

type NavItemProps = {
  to: string
}

const NavItem = ({ to }: NavItemProps) => (
  <Link to={to} spy={true} smooth={true} className="link" activeClass="active">
    <div className="nav-item"></div>
  </Link>
)
const DotNav = (navs: Array<string> = ["default"]) => (
  <ul>
    {['main', 'about', 'portfolio', 'news', 'growth'].map((to, index) => {
      return (
        <li key={index}>
          <NavItem to={to} />
        </li>
      )
    })}
  </ul>
)

export default DotNav