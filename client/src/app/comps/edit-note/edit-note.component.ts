import { Component, OnInit } from "@angular/core";
import { Router, RouterLink, ActivatedRoute } from "@angular/router";
import { SubjectInterface } from "../../core/interfaces/subject-interface";
import { noteService } from "../../core/services/note.service";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CategorySettingsComponent } from "../category-settings/category-settings.component";
import { NotecardInterface } from "../../core/interfaces/notecard-interface";

@Component({
  selector: "app-edit-note",
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    CategorySettingsComponent,
  ],
  templateUrl: "./edit-note.component.html",
  styleUrl: "./edit-note.component.css",
})
export class EditNoteComponent implements OnInit {
  // Set default values for inputs
  selectedSubject: string = "";

  // Note Service
  subjectList: SubjectInterface[] = [];
  note: NotecardInterface | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private noteService: noteService
  ) {}

  subject = new FormControl("");
  title = new FormControl("");
  content = new FormControl("");

  ngOnInit(): void {
    this.title.setValue(String(this.note?.title));
    this.selectedSubject = String(this.note?.subject);
    this.content.setValue(String(this.note?.content));

    // Get Note Details - to Edit
    const noteId = Number(this.route.snapshot.params["id"]);
    this.noteService.getNoteById(noteId).then((note: NotecardInterface[]) => {
      this.note = note[0];
    });

    // Get All Subjects
    this.noteService.getAllSubjects().then((subject: SubjectInterface[]) => {
      this.subjectList = subject;
    });
  }

  // Update Note

  onUpdateNoteSubmit() {
    console.log("Subject: ", this.subject.value);
    console.log("Title: ", this.title.value);
    console.log("Content: ", this.content.value);

    // this.noteService.updateNote();
    this.router.navigate(["/"]);
  }

  titletest: string = "Test";
}
