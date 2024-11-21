import { Component, OnInit } from "@angular/core";
import { noteService } from "../../core/services/note.service";
import { FormsModule, NgForm } from "@angular/forms";
import { SubjectInterface } from "../../core/interfaces/subject-interface";

@Component({
  selector: "app-category-settings",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./category-settings.component.html",
  styleUrl: "./category-settings.component.css",
})
export class CategorySettingsComponent implements OnInit {


  // Get All Subjects
  subjectList: SubjectInterface[] = [];

  constructor(private noteService: noteService) {
  }

  ngOnInit(): void {
    // Get All Subjects
    this.noteService.getAllSubjects().then((subject: SubjectInterface[]) => {
      console.log(subject);
      this.subjectList = subject;
    });
  }

  defaultColor = "#000000";
  // Add New Subject using a Template Driven Form
  onAddNewCategory(e: any) {
    // Add a new Subject
    this.noteService.addSubject({
      id: this.subjectList.length + 1,
      name: e.value.name,
      color: e.value.color ?? this.defaultColor,
      isEditing: false,
    });

    console.log(e.value.color);
    e.reset({
      name: "",
      color: this.defaultColor,
    });
  }

  // Category Table Inline CRUD Operations

  subjectCopy!: SubjectInterface;

  onEditCategory(subject: SubjectInterface) {
    subject.isEditing = true;
    this.subjectCopy = { ...subject };
  }

  onEditCategoryCancel(subject: SubjectInterface) {
    subject.isEditing = false;
    subject.name = this.subjectCopy.name;
    subject.color = this.subjectCopy.color;
  }

  onUpdateCategory(subject: SubjectInterface) {
    subject.isEditing = false;
    this.noteService.updateSubject(subject);
  }

  onDeleteCategory(subjectID: number) {
    this.noteService.deleteSubjectById(subjectID);
  }
}
