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
  note!: NotecardInterface;
  subjectList!: SubjectInterface[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private noteService: noteService
  ) {
    // Get Note Details from the previous route - to Edit
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.note = navigation.extras.state["note_data"];
    }
  }
  // Reactive Form Controls
  subject = new FormControl("");
  title = new FormControl("");
  content = new FormControl("");

  ngOnInit(): void {
    // Get All Subjects
    this.noteService.getAllSubjects().then((subject: SubjectInterface[]) => {
      this.subjectList = subject;
    });

    // Load the Note Data to Edit
    this.title.setValue(String(this.note?.title));
    this.content.setValue(String(this.note?.content));
    this.subject.setValue(String(this.note.subject._id));
  }

  // Update Note
  async onUpdateNoteSubmit() {
    const updateNoteObj = {
      ID: this.note.ID,
      title: this.title.value,
      content: this.content.value,
      noteObjectId: this.note._id,
      subjectObjectId: this.subject.value,
    };

    await this.noteService.updateNote(updateNoteObj);

    this.router.navigate([`/note/${this.note.ID}`]);
  }
}
