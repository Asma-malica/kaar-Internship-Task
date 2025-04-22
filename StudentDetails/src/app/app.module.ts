import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'; // if routing exists
import { AppComponent } from './app.component';

// 👇 Important: import the StudentModule
import { StudentModule } from './student/student.module';

@NgModule({
  declarations: [
    AppComponent, // root component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule, // 👈 include StudentModule here
  ],
  providers: [],
  bootstrap: [AppComponent], // first component to run
})
export class AppModule { }
