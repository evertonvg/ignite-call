import { Calendar } from '@/src/components/Calendar'
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from './styles'
import { useState } from 'react'

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const isDateSelected = !!selectedDate
  return (
    <div>
      <Container isTimePickerOpen={isDateSelected}>
        <Calendar
          selectedDate={selectedDate}
          onDateSelected={setSelectedDate}
        />
        {isDateSelected && (
          <TimePicker>
            <TimePickerHeader>
              terça feira <span>20 de setembro</span>
            </TimePickerHeader>
            <TimePickerList>
              <TimePickerItem>15:00</TimePickerItem>
              <TimePickerItem>15:00</TimePickerItem>
              <TimePickerItem>15:00</TimePickerItem>
              <TimePickerItem>15:00</TimePickerItem>
              <TimePickerItem>15:00</TimePickerItem>
              <TimePickerItem>15:00</TimePickerItem>
              <TimePickerItem>15:00</TimePickerItem>
              <TimePickerItem>15:00</TimePickerItem>
              <TimePickerItem>15:00</TimePickerItem>
              <TimePickerItem>15:00</TimePickerItem>
              <TimePickerItem>15:00</TimePickerItem>
              <TimePickerItem>15:00</TimePickerItem>
              <TimePickerItem>15:00</TimePickerItem>
              <TimePickerItem>15:00</TimePickerItem>
              <TimePickerItem>15:00</TimePickerItem>
              <TimePickerItem>15:00</TimePickerItem>
              <TimePickerItem>15:00</TimePickerItem>
            </TimePickerList>
          </TimePicker>
        )}
      </Container>
    </div>
  )
}
