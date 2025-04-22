import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student.component';
import { StudentListsComponent } from './student-lists/student-lists.component';

@NgModule({
  declarations: [
    StudentComponent,
    StudentListsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [StudentComponent]
})
export class StudentModule { }
