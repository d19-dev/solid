import clsx from 'clsx'
import React, { useState } from 'react'
import { CalendarEvent, Post } from '../../../@types'
import { findEventByDate, firstWeekDay, getMonthDays, humableDate } from '../../../lib'
import NavigateNextIcon from '../../../svg/navigate-next.svg'
import NanigatePrevIcon from '../../../svg/navigate-prev.svg'
import tpmEvents from './events'
import * as styles from './index.module.css'
import EventIcon from '../../../svg/event.svg'

interface Props {
  events: Post[] | []
}

const Calendar: React.FC<Props> = ({
  events,
}) => {
  const now = new Date()
  const [month, year] = [now.getMonth(), now.getFullYear()]
  const [current, setCurrent] = useState({month, year})
  const currentMonth = new Date(current.year, current.month)
  const handleNextMonth = (): void => {
    if (current.month < 11) {
      setCurrent({...current, month: current.month + 1,})
    } else {
      setCurrent({month: 0, year: current.year + 1})
    }
  }
  const handlePrevMonth = (): void => {
    if (current.month === 0) {
      setCurrent({month: 11, year: current.year - 1})
    } else {
      setCurrent({...current, month: current.month - 1,})
    }
  }
  const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
  const days = getMonthDays(currentMonth)
  const prevOffset = firstWeekDay(currentMonth)
  const prevMonth = new Date(currentMonth.setMonth(currentMonth.getMonth() - 1))
  const prevMonthDays = (prevOffset === 0)? []: getMonthDays(prevMonth).slice(-prevOffset)
  const nextOffset = 42 - (days.length + prevMonthDays.length)
  const nextMonth = new Date(currentMonth.setMonth(currentMonth.getMonth() + 1))
  const nextMonthDays = getMonthDays(nextMonth).slice(0, nextOffset)
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.calendar}>
          <div className={styles.month}>
            <button className={styles.nav} onClick={handlePrevMonth}>
              <NanigatePrevIcon />
            </button>
            <div className={styles.currentMonth}>{humableDate(currentMonth, 'MMMM')}</div>
            <button className={styles.nav} onClick={handleNextMonth}>
              <NavigateNextIcon />
            </button>
          </div>
          <div className={styles.weekdays}>
            { weekdays.map((weekday, index) => (
              <div className={clsx(styles.weekday, (index === 5 || index === 6) && styles.weekend )}>{weekday}</div>
            ))}
          </div>
          <div className={styles.days}>
            { prevMonthDays.map((day) => <div className={clsx(styles.day, styles.offset)}>{day}</div>) }
            { days.map((day) => {
              const isEvent = findEventByDate(tpmEvents, new Date(current.year, current.month, day)).length > 0
              return <div className={clsx(styles.day, isEvent && styles.selected)}>{day}</div>
            })}
            { nextMonthDays.map((day) => <div className={clsx(styles.day, styles.offset)}>{day}</div>) }
          </div>
        </div>
        <div className={styles.events}>
          { 
            findEventByDate(tpmEvents, currentMonth, true).map((event) => (
              <div className={styles.event}>
                <div className={styles.eventDate}>
                  <EventIcon />
                  <div>{humableDate(event.date)}</div>
                </div>
                <div className={styles.eventText}>{event.text}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Calendar
