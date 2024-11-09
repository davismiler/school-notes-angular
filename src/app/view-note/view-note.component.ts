import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-note',
  standalone: true,
  imports: [],
  templateUrl: './view-note.component.html',
  styleUrl: './view-note.component.css'
})
export class ViewNoteComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  noteId = 0;

  constructor() {
    this.noteId = Number(this.route.snapshot.params['id']);
  }
}
