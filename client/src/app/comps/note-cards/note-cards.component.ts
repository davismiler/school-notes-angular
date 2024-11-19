import { Component, Input } from '@angular/core';
import { NotecardInterface } from '../../core/interfaces/notecard-interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-note-cards',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './note-cards.component.html',
  styleUrl: './note-cards.component.css',
})
export class NoteCardsComponent {
  @Input() Note!: NotecardInterface;
}
