import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from 'src/app/routes/app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/general/nav-bar/nav-bar.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { HomeModule } from './modules/home.module';
import { RoomsModule } from './modules/rooms.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';








FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
]);
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    RoomsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FullCalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
