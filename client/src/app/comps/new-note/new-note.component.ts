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

  async getNotesCount() {
    try {
      const count = await this.noteService.getNotesCount();
      this.notesCount = count.count;
    } catch (error) {
      console.error("Error getting notes count:", error);
      this.notesCount = 0;
    }
  }

  // Get all subject in select menu
  async getAllSubjects() {
    try {
      const subjects = await this.noteService.getAllSubjects();
      this.subjectList = subjects;
    } catch (error) {
      console.error("Error getting subjects:", error);
      this.subjectList = [];
    }
  }

  async ngOnInit(): Promise<void> {
    await this.getAllSubjects();
    // Get Notes Count on load
    await this.getNotesCount();
  }

  // Add a New Note (Reactive Form)
  subjectName = new FormControl("");
  title = new FormControl("");
  content = new FormControl("");

  async onNewNoteSubmit() {
    // Validate form
    if (!this.title.value || !this.content.value || !this.subjectName.value) {
      alert("Please fill in all fields");
      return;
    }

    // Get Notes Count
    await this.getNotesCount();

    const now = new Date();

    const chosenSubject = this.subjectList.find((subject) => {
      return subject.name === this.subjectName.value;
    });

    if (!chosenSubject) {
      alert("Please select a valid subject");
      return;
    }

    const noteObj: any = {
      ID: this.notesCount + 1,
      subject_id: chosenSubject._id,
      title: this.title.value,
      content: this.content.value,
      createdAt: String(now),
    };

    try {
      await this.noteService.addNote(noteObj);
      this.router.navigate(["/"]);
    } catch (error) {
      console.error("Error adding note:", error);
      alert("Failed to add note. Please try again.");
    }
  }
}
