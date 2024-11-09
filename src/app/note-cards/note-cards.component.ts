import { Component, Input } from '@angular/core';
import { NotecardInterface } from '../interfaces/notecard-interface';

@Component({
  selector: 'app-note-cards',
  standalone: true,
  imports: [],
  templateUrl: './note-cards.component.html',
  styleUrl: './note-cards.component.css',
})
export class NoteCardsComponent {

  @Input() Note!:NotecardInterface;
}
 