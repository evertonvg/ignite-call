import { Calendar } from '@/src/components/Calendar'
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from './styles'

import { useState } from 'react'
import dayjs from 'dayjs'
import { api } from '@/src/lib/axios'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'

interface Availability {
  possibleTimes: number[]
  availableTimes: number[]
}

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const router = useRouter()

  const isDateSelected = !!selectedDate
  const username = String(router.query.username)

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const describedDate = selectedDate
    ? dayjs(selectedDate).format('DD[ de ]MMMM')
    : null

  const selectedDateWithoutTime = selectedDate
    ? dayjs(selectedDate).format('YYYY-MM-DD')
    : null

  const { data: availability } = useQuery<Availability>({
    queryKey: ['availability', selectedDateWithoutTime],
    queryFn: async () => {
      const { data } = await api.get(`/users/${username}/availability`, {
        params: {
          date: selectedDateWithoutTime,
        },
      })

      return data
    },
    enabled: !!selectedDate,
  })

  return (
    <div>
      <Container isTimePickerOpen={isDateSelected}>
        <Calendar
          selectedDate={selectedDate}
          onDateSelected={setSelectedDate}
        />

        {isDateSelected && (
          <>
            <TimePickerHeader>
              {weekDay}, <span>{describedDate}</span>
            </TimePickerHeader>
            <TimePicker>
              <TimePickerList>
                {availability?.possibleTimes.map((hour) => {
                  return (
                    <TimePickerItem
                      key={hour}
                      disabled={!availability.availableTimes.includes(hour)}
                    >
                      {String(hour).padStart(2, '0')}::00
                    </TimePickerItem>
                  )
                })}
              </TimePickerList>
            </TimePicker>
          </>
        )}
      </Container>
    </div>
  )
}
