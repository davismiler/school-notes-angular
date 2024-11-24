import { Component, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { SubjectInterface } from "../../core/interfaces/subject-interface";
import { noteService } from "../../core/services/note.service";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CategorySettingsComponent } from "../category-settings/category-settings.component";
import { NotecardInterface } from "../../core/interfaces/notecard-interface";

@Component({
  selector: "app-new-note",
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    CategorySettingsComponent,
  ],
  templateUrl: "./new-note.component.html",
  styleUrl: "./new-note.component.css",
})
export class NewNoteComponent implements OnInit {
  subjectList: SubjectInterface[] = [];
  notesCount!: number;

  constructor(private router: Router, private noteService: noteService) {}

  getNotesCount() {
    this.noteService.getNotesCount().then((c) => {
      this.notesCount = c.count;
    });
  }

  // Get all subject in select menu
  getAllSubjects() {
    this.noteService.getAllSubjects().then((subject: SubjectInterface[]) => {
      this.subjectList = subject;
    });
  }

  ngOnInit(): void {
    this.getAllSubjects();
    // Get Notes Count on load
    this.getNotesCount();
  }

  // Add a New Note (Reactive Form)
  subjectName = new FormControl("");
  title = new FormControl("");
  content = new FormControl("");

  onNewNoteSubmit() {
    // Get Notes Count
    this.getNotesCount();

    const now = new Date();

    const chosenSubject = this.subjectList.find((subject) => {
      return subject.name === this.subjectName.value;
    });

    const noteObj: any = {
      ID: this.notesCount + 1,
      subject_id: chosenSubject?._id ?? 0,
      title: this.title.value ?? "",
      content: this.content.value ?? "",
      createdAt: String(now),
    };

    this.noteService.addNote(noteObj);

    this.router.navigate(["/"]);
  }
}
