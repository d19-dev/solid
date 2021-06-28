import React from "react"

export const Overlay = ({ children }) => (
  <div className="absolute w-full h-full -z-10 overflow-hidden" draggable="false">
    {children}
  </div>
)

export const Devider = (props) => (
  <div {...props}></div>
)

type DefaultProps = {
  children: React.ReactNode,
  className?: string,
  style?: React.CSSProperties,
  [x: string]: any
}

export const List = ({children, className, style, ...rest}: DefaultProps): JSX.Element => {
  const classes = `flex -mx-2 ${className}`
  return (
    <ul className={classes} style={style} {...rest}>
      {children}
    </ul>
  )
}

export const ListItem = ({children, className, style, ...rest}: DefaultProps): JSX.Element => {
  const classes = `flex px-2 ${className}`
  return (
    <li className={classes} style={style} {...rest}>
      {children}
    </li>
  )
}