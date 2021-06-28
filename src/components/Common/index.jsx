import React from "react"

export const Overlay = ({ children }) => (
  <div className="absolute w-full h-full -z-10 overflow-hidden" draggable="false">
    {children}
  </div>
)

export const Devider = (props) => (
  <div {...props}></div>
)