import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';

import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment'

const CalendarMonthly = () => {
  const startDate = moment("2020-03-30 05:45")
  const [events, ] = useState([
    {
      start: moment(startDate),
      end: moment(startDate),
      title: "A Shift"
    },
    {
      start: moment(startDate).add(4, 'days'),
      end: moment(startDate).add(4, 'days'),
      title: "A Shift"
    },
    {
      start: moment(startDate).add(8, 'days'),
      end: moment(startDate).add(8, 'days'),
      title: "A Shift"
    },
    {
      start: moment(startDate).add(12, 'days'),
      end: moment(startDate).add(12, 'days'),
      title: "A Shift"
    },
    {
      start: moment(startDate).add(16, 'days'),
      end: moment(startDate).add(16, 'days'),
      title: "A Shift"
    },
    {
      start: moment(startDate).add(20, 'days'),
      end: moment(startDate).add(20, 'days'),
      title: "A Shift"
    },
    {
      start: moment(startDate).add(24, 'days'),
      end: moment(startDate).add(24, 'days'),
      title: "A Shift"
    },
    {
      start: moment(startDate).add(28, 'days'),
      end: moment(startDate).add(28, 'days'),
      title: "A Shift"
    },
    {
      start: moment(startDate).add(32, 'days'),
      end: moment(startDate).add(32, 'days'),
      title: "A Shift"
    },
    {
      start: moment(startDate).add(36, 'days'),
      end: moment(startDate).add(36, 'days'),
      title: "A Shift"
    },
    {
      start: moment(startDate).add(40, 'days'),
      end: moment(startDate).add(40, 'days'),
      title: "A Shift"
    },
    {
      start: moment(startDate).add(44, 'days'),
      end: moment(startDate).add(44, 'days'),
      title: "A Shift"
    },
    {
      start: moment(startDate).add(48, 'days'),
      end: moment(startDate).add(48, 'days'),
      title: "A Shift"
    },
    {
      start: moment(startDate).add(52, 'days'),
      end: moment(startDate).add(52, 'days'),
      title: "A Shift"
    },
    {
      start: moment(startDate).add(56, 'days'),
      end: moment(startDate).add(56, 'days'),
      title: "A Shift"
    },
  ])

  const localizer = momentLocalizer(moment)
  return (
    <div className="calendar-monthly">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 750 }}
      />
    </div>
  )
}

export default CalendarMonthly;