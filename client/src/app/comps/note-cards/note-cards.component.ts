import { Component, Input, OnInit } from "@angular/core";
import { NotecardInterface } from "../../core/interfaces/notecard-interface";
import { RouterLink } from "@angular/router";
import { SubjectInterface } from "../../core/interfaces/subject-interface";
import { noteService } from "../../core/services/note.service";

@Component({
  selector: "app-note-cards",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./note-cards.component.html",
  styleUrl: "./note-cards.component.css",
})
export class NoteCardsComponent {
  @Input() Note!: NotecardInterface;

  constructor(private noteService: noteService) {}
}
