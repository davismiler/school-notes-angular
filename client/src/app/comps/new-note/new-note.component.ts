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
  // templateUrl: "./new-note.component.html",
  template: "",
  styleUrl: "./new-note.component.css",
})
export class NewNoteComponent implements OnInit {
  subjectList: SubjectInterface[] = [];
  notesCount!: number;

  constructor(private router: Router, private noteService: noteService) {}

  ngOnInit(): void {
    // Get all subject in select menu
    this.noteService.getAllSubjects().then((subject: SubjectInterface[]) => {
      this.subjectList = subject;
    });

    // Get Notes Count on load
    this.noteService.getNotesCount().then((c) => {
      this.notesCount = c.count;
    });
  }

  // Add a New Note (Reactive Form)

  subjectName = new FormControl("");
  title = new FormControl("");
  content = new FormControl("");

  onNewNoteSubmit() {
    // console.log("Subject: ", this.subject.value);
    // console.log("Title: ", this.title.value);
    // console.log("Content: ", this.content.value);

    // Get Notes Count
    this.noteService.getNotesCount().then((c) => {
      this.notesCount = c.count;
    });

    const now = new Date();

    const chosenSubject = this.subjectList.find((subject) => {
      return subject.name === this.subjectName.value;
    });

    const noteObj: unknown = {
      // ID: this.notesCount + 1,
      // subject_id: chosenSubject?.id ?? 0,
      // title: this.title.value ?? "",
      // content: this.content.value ?? "",
      // date: now.toISOString().split("T")[0],
      // time: now.toTimeString().slice(0, 5),
    };

    console.log(noteObj);

    // this.noteService.addNote(noteObj);

    this.router.navigate(["/"]);
  }


}
