import { Calendar } from '@/src/components/Calendar'
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from './style'

export function CalendarStep() {
  const isDateSelected = true
  return (
    <div>
      <Container isTimePickerOpen={isDateSelected}>
        <Calendar />
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
