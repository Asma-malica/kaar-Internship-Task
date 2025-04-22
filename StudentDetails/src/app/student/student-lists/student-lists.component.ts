import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-lists',
  templateUrl: './student-lists.component.html',
  styleUrls: ['./student-lists.component.css']
})

export class StudentListsComponent implements OnInit {
  title = 'Student Management System';
  searchTerm: string = '';
  studentData: any[] = [];
  ngOnInit() {
    this.studentData = [
      { name: 'A', department: 'CSE', marks: 78 },
      { name: 'B', department: 'ECE', marks: 35 },
      { name: 'C', department: 'IT', marks: 50 },
    ];
  }

  clearSearch() {
    this.searchTerm = '';
  }

  fetchFilteredStudents() {
    return this.studentData.filter(student =>
      student.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}




