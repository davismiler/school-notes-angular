import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { noteService } from "../../core/services/note.service";
import { NotecardInterface } from "../../core/interfaces/notecard-interface";
import { SubjectInterface } from "../../core/interfaces/subject-interface";

@Component({
  selector: "app-view-note",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./view-note.component.html",
  styleUrl: "./view-note.component.css",
})
export class ViewNoteComponent implements OnInit {
  note: NotecardInterface | undefined;
  noteId!: number;

  constructor(
    private noteService: noteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  noteSubject: SubjectInterface = {
    id: 0,
    name: "",
    color: "",
    isEditing: false,
  };

  ngOnInit(): void {
    // const noteId = Number(this.route.snapshot.params["id"]);
    this.noteId = Number(this.route.snapshot.params["id"]);
    // Get Note Details
    this.noteService
      .getNoteById(this.noteId)
      .then((note: NotecardInterface[]) => {
        this.note = note[0];
      });

    // Get Note SUbject by Note Id
    this.noteService
      .getSubjectByNoteID(this.noteId)
      .then((noteSubject: SubjectInterface[]) => {
        this.noteSubject = noteSubject[0];
      });
  }

  deleteNote() {
    const confirmDelete = confirm(`Are you sure you wanna delete this note?`);

    if (confirmDelete) {
      this.noteService.deleteNoteById(this.noteId).then((note: unknown) => {
        console.log(note);
      });

      alert(`"${this.note?.title}" was deleted.`);
      this.router.navigate(["/"]);
    } else {
      console.log(confirmDelete);
    }
  }
}
