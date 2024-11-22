import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
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

  constructor(
    private noteService: noteService,
    private route: ActivatedRoute
  ) {}

  noteSubject: SubjectInterface = {
    id: 0,
    name: "",
    color: "",
    isEditing: false,
  };

  ngOnInit(): void {
    // Get Note Details
    const noteId = Number(this.route.snapshot.params["id"]);
    this.noteService.getNoteById(noteId).then((note: NotecardInterface[]) => {
      this.note = note[0];
    });

    // Get Note SUbject by Note Id
    this.noteService
      .getSubjectByNoteID(noteId)
      .then((noteSubject: SubjectInterface[]) => {
        this.noteSubject = noteSubject[0];
      });
  }
}
