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

  async ngOnInit(): Promise<void> {
    this.noteId = Number(this.route.snapshot.params["id"]);

    try {
      const notes = await this.noteService.getNoteById(this.noteId);
      this.note = notes[0];
    } catch (error) {
      console.error("Error fetching note:", error);
    }
  }

  async deleteNote(): Promise<void> {
    const confirmDelete = confirm(`Are you sure you want to delete this note?`);

    if (confirmDelete && this.note?._id) {
      try {
        await this.noteService.deleteNoteById(this.note._id);
        this.router.navigate(["/"]);
      } catch (error) {
        console.error("Error deleting note:", error);
        alert("Failed to delete note. Please try again.");
      }
    }
  }
}
