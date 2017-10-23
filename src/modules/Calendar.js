import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.less';

const DragAndDropCalendar = withDragAndDrop(BigCalendar);

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

var events = [
  {
    'title': 'All Day Event',
    'allDay': true,
    'start': new Date(2017, 9, 0),
    'end': new Date(2017, 9, 1)
  },
  {
    'title': 'Long Event',
    'start': new Date(2017, 9, 7),
    'end': new Date(2017, 9, 10)
  },

  {
    'title': 'DTS STARTS',
    'start': new Date(2017, 2, 13, 0, 0, 0),
    'end': new Date(2017, 2, 20, 0, 0, 0)
  },

  {
    'title': 'DTS ENDS',
    'start': new Date(2017, 10, 6, 0, 0, 0),
    'end': new Date(2017, 10, 13, 0, 0, 0)
  },

  {
    'title': 'Some Event',
    'start': new Date(2017, 9, 9, 0, 0, 0),
    'end': new Date(2017, 9, 9, 0, 0, 0)
  },
  {
    'title': 'Conference',
    'start': new Date(2017, 9, 11),
    'end': new Date(2017, 9, 13),
    'desc': 'Big conference for important people'
  },
  {
    'title': 'Meeting',
    'start': new Date(2017, 9, 12, 10, 30, 0, 0),
    'end': new Date(2017, 9, 12, 12, 30, 0, 0),
    'desc': 'Pre-meeting meeting, to prepare for the meeting'
  },
  {
    'title': 'Lunch',
    'start':new Date(2017, 9, 12, 12, 0, 0, 0),
    'end': new Date(2017, 9, 12, 13, 0, 0, 0),
    'desc': 'Power lunch'
  },
  {
    'title': 'Meeting',
    'start':new Date(2017, 9, 12,14, 0, 0, 0),
    'end': new Date(2017, 9, 12,15, 0, 0, 0)
  },
  {
    'title': 'Happy Hour',
    'start':new Date(2017, 9, 12, 17, 0, 0, 0),
    'end': new Date(2017, 9, 12, 17, 30, 0, 0),
    'desc': 'Most important meal of the day'
  },
  {
    'title': 'Dinner',
    'start':new Date(2017, 9, 12, 20, 0, 0, 0),
    'end': new Date(2017, 9, 12, 21, 0, 0, 0)
  },
  {
    'title': 'Birthday Party',
    'start':new Date(2017, 9, 13, 7, 0, 0),
    'end': new Date(2017, 9, 13, 10, 30, 0)
  },
  {
    'title': 'Late Night Event',
    'start':new Date(2017, 9, 17, 19, 30, 0),
    'end': new Date(2017, 9, 18, 2, 0, 0)
  },
  {
    'title': 'Multi-day Event',
    'start':new Date(2017, 9, 20, 19, 30, 0),
    'end': new Date(2017, 9, 22, 2, 0, 0)
  }
]

class DNDCalendar extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      events: events
    }

    this.moveEvent = this.moveEvent.bind(this)
  }

  moveEvent({ event, start, end }) {
    const { events } = this.state;

    const idx = events.indexOf(event);
    const updatedEvent = { ...event, start, end };

    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)

    this.setState({
      events: nextEvents
    })
  }

  render(){
    return (
      <div className="CalendarTile">
        <div className="TileTitle">Calendar</div>
        <hr />
        <div {...this.props} className="CalendarObject">
          <DragAndDropCalendar
            selectable
            popup={true}
            events={this.state.events}
            onEventDrop={this.moveEvent}
            defaultView='month'
            scrollToTime={new Date(1970, 1, 1, 6)}
            defaultDate={new Date()}
            onSelectEvent={event => alert(event.title +"\n"+
              (event.desc !== undefined ? event.desc : "No details given."))}
          />
        </div>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(DNDCalendar)
