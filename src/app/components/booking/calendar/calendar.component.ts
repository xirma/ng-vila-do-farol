import { Component, forwardRef, OnInit} from '@angular/core';

import { Calendar} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { BehaviorSubject } from 'rxjs';
import { MainService } from 'src/app/main.service';



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  calendarOptions = {
    plugins: [ interactionPlugin, dayGridPlugin ],
    initialView: 'dayGridMonth',
    selectable: true,
    select: ((date) => {
      this.selectHandler(date);
    }),
    validRange: function(nowDate) {
      return {
        start: nowDate
      };
    }
  };


  constructor(
    private service: MainService
  ) {}

  ngOnInit(): void {
    forwardRef(() => Calendar);
  }

  selectHandler(date): void {
    this.service.startDateValue.next(date.startStr);

    const endDate = this.service.endDateHandler(date.endStr);
    this.service.endDateValue.next(endDate);
  }
}
