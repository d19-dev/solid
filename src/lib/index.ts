import { CalendarEvent, Post, Term } from '../@types'
import moment from 'moment'
import 'moment/locale/ru'

export const filterByTerm = (posts: Post[] | [], term: string): Post[] | [] => {
  if (!posts.length) return []
  const filtered = posts as Post[]
  return filtered.filter((post) => {
    if (!post.terms.nodes.length) return false
    const terms = post.terms.nodes as Term[]
    return terms.some((node) => (node.slug === term))
  })
}

export const excerpt = (str: string, limit: number = 92): string => {
  if (str.length > limit) {
      return str.substring(0, limit) + '...'
  }
  return str
}

export const currentYear = (): number => (new Date()).getFullYear()

export const humableDate = (date: Date, format: string = 'D MMMM'): string => {
  const fullYear = (new Date(date)).getFullYear()
  if (fullYear === currentYear()) {
    return moment(date).format(format)
  } else {
    return moment(date).format(`${format}, YYYY`)
  }
}

export const getMonthDays = (date: Date): number[] => {
  const daysInMonth = moment(date).daysInMonth()
  return Array.from(Array(daysInMonth), (_, i) => i + 1)
}

export const firstWeekDay = (date: Date): number => {
  var first = moment(date).startOf('month');
  return first.weekday();
}

export const findEventByDate = (
  events: CalendarEvent[],
  date: Date,
  findByMonth: boolean = false
): CalendarEvent[] | [] => {
  return events.filter((event) => {
    const eventDate = new Date(event.date)
    return (
      eventDate.getFullYear() === date.getFullYear() &&
      eventDate.getMonth() === date.getMonth() &&
      (findByMonth || eventDate.getDate() === date.getDate())
    )
  })
}