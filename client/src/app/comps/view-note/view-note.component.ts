import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { noteService } from "../../core/services/note.service";
import { NotecardInterface } from "../../core/interfaces/notecard-interface";

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

  goToEdit(): void {
    this.router.navigate([`note/${this.noteId}/edit`], {
      state: { note_data: this.note },
    });
  }

  ngOnInit(): void {
    this.noteId = Number(this.route.snapshot.params["id"]);

    this.noteService
      .getNoteById(this.noteId)
      .then((note: NotecardInterface[]) => {
        this.note = note[0];
      });
  }

  deleteNote() {
    const confirmDelete = confirm(`Are you sure you wanna delete this note?`);

    if (confirmDelete) {
      const noteID = this.note?._id;

      this.noteService.deleteNoteById(noteID).then((note: unknown) => {});
      this.router.navigate(["/"]);
    } else {
      console.log("Canceled! Note was not deleted.");
    }
  }
}
