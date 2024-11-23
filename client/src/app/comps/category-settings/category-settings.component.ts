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
  subjectList: SubjectInterface[] = [];

  constructor(private noteService: noteService) {}

  ngOnInit(): void {
    this.getAllSubjects();
  }

  getAllSubjects() {
    this.noteService.getAllSubjects().then((subject: SubjectInterface[]) => {
      this.subjectList = subject.reverse();
    });
  }

  defaultColor = "#000000";

  onAddNewCategory(e: any) {
    this.noteService.addSubject({
      name: e.value.name,
      color: e.value.color ?? this.defaultColor,
    });

    this.getAllSubjects();
    e.reset();
  }

  // Category Table CRUD Operations

  // This helps to reset the editied value when you canceled the Editing without Submitting
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
