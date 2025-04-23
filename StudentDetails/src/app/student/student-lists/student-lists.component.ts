import { Component, OnInit } from '@angular/core';
//decorator -> shows the meta data of the component 
@Component({
  selector: 'app-student-lists',
   // student-lists is the component and we have to use that inside the student module 
  // to that so we have to refer it that is known as selector
  templateUrl: './student-lists.component.html',  //ui
  styleUrls: ['./student-lists.component.css'] //component css
})

export class StudentListsComponent implements OnInit {
  title = 'Student Management System';
  searchTerm: string = '';
  studentData: any[] = [];
    // OnInit -> It is the interface 
// on initializing the app the content would be running here 
// (to display the content in html file)
  ngOnInit() {
 //interpolation -> {{}} to bind the data from ts file to html file 
    //event binding (clicking event)
    //get the data from api
    this.studentData = [
      { name: 'A', department: 'CSE', marks: 78 },
      { name: 'B', department: 'ECE', marks: 35 },
      { name: 'C', department: 'IT', marks: 50 },
    ];
  }

  clearSearch() {
    this.searchTerm = '';
  }
  //class which is used for searching the data 
  fetchFilteredStudents() {
    return this.studentData.filter(student =>
      student.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}




