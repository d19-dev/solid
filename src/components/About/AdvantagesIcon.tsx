import React from 'react'
import AdvantagesIcon1 from './assets/advantages-1.svg'
import AdvantagesIcon2 from './assets/advantages-2.svg'
import AdvantagesIcon3 from './assets/advantages-3.svg'
import AdvantagesIcon4 from './assets/advantages-4.svg'
import AdvantagesIcon5 from './assets/advantages-5.svg'
import AdvantagesIcon6 from './assets/advantages-6.svg'

const components = {
  document: AdvantagesIcon1,
  transparency: AdvantagesIcon2,
  gift: AdvantagesIcon3,
  income: AdvantagesIcon4,
  individual: AdvantagesIcon5,
  personal: AdvantagesIcon6
}

type Props = {
  iconName: string,
  className?: string,
  style?: React.CSSProperties,
}

const AdvantagesIcon = ({iconName, className, style}: Props): JSX.Element => {
  const IconComponent = components[iconName]
  return <IconComponent {...{className, style}}/>
}

export default AdvantagesIcon