# Project Setup

## 1. Initial Setup
- Open a terminal.
- Create a new Angular project by running: `ng new student-management`
- Choose **CSS** as the stylesheet format when prompted.
- Navigate into the project folder: `cd student-management`

---

## 2. Generate Feature Module and Components
- Generate a new feature module by running: `ng generate module student`
- Generate a component for displaying student information: `ng generate component student/student`
- Generate a component for the student lists: `ng generate component student/student-lists`

---

## 3. Folder Structure
Ensure the project structure looks like this under `src/app`:
- `student/`
  - `student.module.ts`
  - `student/`
    - `student.component.ts`
    - `student.component.html`
    - `student.component.css`
  - `student-lists/`
    - `student-lists.component.ts`
    - `student-lists.component.html`
    - `student-lists.component.css`

---

## 4. Configuring the Module
- In `student.module.ts`:
  - Import **CommonModule** and **FormsModule** for handling forms.
  - Declare **StudentComponent** and **StudentListsComponent** in the `declarations` array.
  - Export **StudentComponent** to make it available in the main application.
- In `app.module.ts`:
  - Import **BrowserModule**, **AppRoutingModule**, and **StudentModule**.
  - Add **StudentModule** to the `imports` array to use it in the application.

---

## 5. Setting Up the Main Application Component
- In `app.component.html`, include the `<app-student>` selector to render the student component.

---

## 6. Configuring the Student Component
- In `student.component.html`, include the `<app-student-lists>` selector to display the student lists component.

---

## 7. Developing the Student Lists Component
- In `student-lists.component.ts`:
  - Define the **title** for the student list.
  - Add **searchTerm** for two-way binding to filter students.
  - Define an array **studentData** with sample data (name, grade, marks).
  - Create a method **fetchFilteredStudents()** to filter students based on **searchTerm**.
  - Create **clearSearch()** method to reset the search field.

---

## 8. HTML Template Implementation
- In `student-lists.component.html`:
  - Use interpolation `{{ title }}` to display the title.
  - Bind the search input using two-way binding `[(ngModel)]="searchTerm"`.
  - Create a button with event binding `(click)="clearSearch()"` to clear the search input.
  - Use `*ngFor` to iterate over filtered students and display them in a table.
  - Display a message when no students are found using `*ngIf`.
  - Implement a **ternary operator** for conditional display or styling.

---

## 9. CSS Styling
- In `student-lists.component.css`:
  - Style the container with margin and flex properties.
  - Style the table with proper borders, padding, and shadows.
  - Customize table header rows with background colors.
  - Alternate row background colors using `nth-of-type(even)`.

---

## 10. Running the Application
- In the terminal, navigate to the project folder.
- Start the application using: `ng serve`
- Open a browser and visit `http://localhost:4200` to view the student management system.

---
