import React from 'react'
import { Overlay } from '../Common';
import Layout from './assets/layout.svg'
import Event from './assets/Event.svg'

type Day = {
  date: number,
  event?: string | Array<string>,
  dateString?: string
}

type Month = {
  days: Array<Day>,
  title: string
}

type Year = Array<Month>

const calendar: Year = [
  {
    title: 'Июнь',
    days: [
      { date: 31 },
      { date: 1 },
      { date: 2 },
      { date: 3 },
      { date: 4 },
      { date: 5 },
      { date: 6 },
      { date: 7, event: 'Выплата купонного дохода по биржевым облигациям серии БО-001-04', dateString: '7 июня' },
      { date: 8 },
      { date: 9, event: 'Выплата купонного дохода по биржевым облигациям серии БО-001-05', dateString: '9 июня' },
      { date: 10 },
      { date: 11 },
      { date: 12 },
      { date: 13 },
      { date: 14, event: 'Выплата купонного дохода по биржевым облигациям серии БО-001-03', dateString: '14 июня' },
      { date: 15 },
      { date: 16 },
      { date: 17 },
      { date: 18 },
      { date: 19 },
      { date: 20 },
      { date: 21 },
      { date: 22, event: ['Выплата купонного дохода по биржевым облигациям серии БО-001-02.', ' Выплата купонного дохода по биржевым облигациям серии БО-001-06'], dateString: '22 июня' },
      { date: 23 },
      { date: 24 },
      { date: 25 },
      { date: 26 },
      { date: 27 },
      { date: 28 },
      { date: 29 },
      { date: 30 },
    ]
  }
];

const Calendar = () => (
  <div className="flex flex-col md:flex-row -mx-2 h-full items-center lg:items-end">
    <div className="flex-none px-2 h-full" style={{ width: 290 }}>
      <h5 className="font-bold mb-5 text-center text-dark-fucsia">Июнь</h5>
      <div className="flex flex-wrap relative">
        <Overlay>
          <Layout className="" />
        </Overlay>
        <div className="flex items-center justify-center font-extrabold text-center text-dark-fucsia text-sm" style={{width: 39, height: 34}}>Пн</div>
        <div className="flex items-center justify-center font-extrabold text-center text-dark-fucsia text-sm" style={{width: 39, height: 34}}>Вт</div>
        <div className="flex items-center justify-center font-extrabold text-center text-dark-fucsia text-sm" style={{width: 39, height: 34}}>Ср</div>
        <div className="flex items-center justify-center font-extrabold text-center text-dark-fucsia text-sm" style={{width: 39, height: 34}}>Чт</div>
        <div className="flex items-center justify-center font-extrabold text-center text-dark-fucsia text-sm" style={{width: 39, height: 34}}>Пт</div>
        <div className="flex items-center justify-center font-extrabold text-center text-deep-purple text-sm" style={{width: 39, height: 34}}>Сб</div>
        <div className="flex items-center justify-center font-extrabold text-center text-deep-purple text-sm" style={{width: 39, height: 34}}>Вс</div>
        {calendar[0].days.map(day => {
          return (
            <div className={"flex items-center justify-center font-light " + (day.event && 'bg-light-fucsia')} style={{width: 39, height: 34}}>{day.date}</div>
          )
        })}
      </div>
    </div>
    <div className="lg:h-64 lg:overflow-y-auto px-2 lg:ml-4">
      {calendar[0].days.map(day => {
        if (day.event)
          return (
            <div className="flex flex-col text-dark-fucsia mt-4">
              <div className="flex items-center">
                <div>
                  <Event />
                </div>
                <div className="ml-2 font-semibold">{day.dateString}</div>
              </div>
              <div className="ml-7 font-light text-sm">{day.event}</div>
            </div>
          )
      })}
    </div>
  </div>

)

export default Calendar