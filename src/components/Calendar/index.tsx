import { CaretLeft, CaretRight } from 'phosphor-react'
import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarDay,
  CalendarTitle,
  Calendarheader,
} from './styles'
import { getWeekDays } from '@/src/utills/get-week-days'

export function Calendar() {
  const shortWeekDatys = getWeekDays({ short: true })
  return (
    <CalendarContainer>
      <Calendarheader>
        <CalendarTitle>
          Dezembro <span>2022</span>
        </CalendarTitle>
        <CalendarActions>
          <button>
            <CaretLeft />
          </button>
          <button>
            <CaretRight />
          </button>
        </CalendarActions>
      </Calendarheader>
      <CalendarBody>
        <thead>
          <tr>
            {shortWeekDatys.map((weekDay) => (
              <th key={weekDay}>{weekDay}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <CalendarDay>1</CalendarDay>
            </td>
            <td>
              <CalendarDay>2</CalendarDay>
            </td>
            <td>
              <CalendarDay disabled>3</CalendarDay>
            </td>
          </tr>
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  )
}
