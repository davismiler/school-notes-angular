import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
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

  constructor(
    private noteService: noteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Get Note Details
    const noteId = Number(this.route.snapshot.params["id"]);
    this.noteService.getNoteById(noteId).then((note: NotecardInterface[]) => {
      this.note = note[0];
    });
  }
}
