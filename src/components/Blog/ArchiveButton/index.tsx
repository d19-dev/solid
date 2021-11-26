import React from 'react'
import * as styles from './index.module.css'
import ArrowRightIcon from '../../../svg/arrow-right.svg'
import ArrowLeftIcon from '../../../svg/arrow-left.svg'
import ListIcon from '../../../svg/list.svg'
import { Overlay } from '../../Common'

interface Props {
  icon?: React.ReactNode
  children: React.ReactNode | string
  arrow?: boolean
  toggled: boolean
  onClick?: () => void
}

const ArchiveButton: React.FC<Props> = ({
  icon = <ListIcon />,
  children,
  arrow = true,
  toggled = false,
  onClick,
}) => (
  <button className={styles.root} {...{onClick}}>
    <div className={styles.wrapper}>
      {icon}
      <div className={styles.caption}>
        {arrow && toggled && <ArrowLeftIcon />}
        <div className={styles.text}>
          {children}
        </div>
        {arrow && !toggled && <ArrowRightIcon />}
      </div>
    </div>
  </button>
)

export default ArchiveButton