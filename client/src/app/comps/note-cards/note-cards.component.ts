import { Component, Input, OnInit } from "@angular/core";
import { NotecardInterface } from "../../core/interfaces/notecard-interface";
import { RouterLink } from "@angular/router";
import { noteService } from "../../core/services/note.service";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-note-cards",
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: "./note-cards.component.html",
  styleUrl: "./note-cards.component.css",
})
export class NoteCardsComponent {
  @Input() Note!: NotecardInterface;

  constructor(private noteService: noteService) {}
}
