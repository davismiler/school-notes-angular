import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { noteService } from '../../core/services/note.service';
import { NotecardInterface } from '../../core/interfaces/notecard-interface';

@Component({
  selector: 'app-view-note',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './view-note.component.html',
  styleUrl: './view-note.component.css',
})
export class ViewNoteComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  noteService = inject(noteService);
  note: NotecardInterface | undefined;

  constructor() {
    const noteId = Number(this.route.snapshot.params['id']);
    this.note = this.noteService.getNoteById(noteId);
  }
}
