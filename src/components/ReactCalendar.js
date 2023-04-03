import { useState } from "react";
import React from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "../App.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const events = [
    {
      id: 0,
      title: 'All Day Event very long title',
      allDay: true,
      start: new Date(2023, 3, 0),
      end: new Date(2023, 3, 1),
    },
    {
      id: 1,
      title: 'Long Event',
      start: new Date(2023, 3, 7),
      end: new Date(2023, 3, 10),
    },

    {
      id: 2,
      title: 'DTS STARTS',
      start: new Date(2023, 4, 13, 0, 0, 0),
      end: new Date(2023, 4, 20, 0, 0, 0),
    },

    {
      id: 3,
      title: 'DTS ENDS',
      start: new Date(2023, 4, 6, 0, 0, 0),
      end: new Date(2023, 4, 13, 0, 0, 0),
    },

    {
      id: 4,
      title: 'Some Event',
      start: new Date(2023, 3, 9, 0, 0, 0),
      end: new Date(2023, 3, 10, 0, 0, 0),
    },
  ];

const ReactCalendar = () => {
  const [myEvents, setMyEvents] = useState(events);

  const onEventResize = ({ event, start, end }) => {
    setMyEvents(prev => {
      const existing = prev.find(ev => ev.id === event.id) ?? {}
      const filtered = prev.filter(ev => ev.id !== event.id)
      return [...filtered, { ...existing, start, end }]
    })
  };

  const onEventDrop = ({event, start, end, isAllDay: droppedOnAllDaySlot = false}) => {
    const { allDay } = event;
    //check if allDay exists, if it does set the event.allDay selected to true
    if (!allDay && droppedOnAllDaySlot) {
      event.allDay = true;
    }
    console.log(allDay)
    setMyEvents(prev => {
      const existing = prev.find(ev => ev.id === event.id) ?? {}
      const filtered = prev.filter(ev => ev.id !== event.id)
      return [...filtered, {...existing, start, end, allDay}]
    })
  };

  return (
    <DnDCalendar
      defaultDate={moment().toDate()}
      defaultView="month"
      events={myEvents}
      localizer={localizer}
      onEventDrop={onEventDrop}
      onEventResize={onEventResize}
      resizable
      style={{ height: 500 }}
    />
  );

}

export default ReactCalendar;
