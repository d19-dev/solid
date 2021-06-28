
import React from 'react'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

type ProgressBarProps = {
  percentage: number
}

const ProgressBar = ({ percentage }: ProgressBarProps) => {
  const styles = buildStyles({
    pathColor: '#902768',
    trailColor: '#614774'
  })
  return (
    <CircularProgressbarWithChildren
      value={percentage}
      styles={styles}
      strokeWidth={10}
      counterClockwise={true}
    >
      <span className="font-extrabold text-sm sm:text-xl text-white">{percentage} %</span>
    </CircularProgressbarWithChildren>
  )
}

export default ProgressBar