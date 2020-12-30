import { Component, forwardRef, OnInit, ViewChild } from '@angular/core';

import { Calendar, CalendarOptions, FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  calendarOptions: CalendarOptions;
  @ViewChild('fullcalendar') fullcalendar: FullCalendarComponent;


  constructor() { }

  ngOnInit(): void {
    forwardRef(() => Calendar);

    this.calendarOptions ={
      plugins: [ interactionPlugin, dayGridPlugin ],
      initialView: 'dayGridMonth',
      selectable: true,
      eventDragStop: this.handleEventDragStop.bind(this)
    };

  }

  handleEventDragStop(arg): void {
    console.log(arg);
  }

  
}
