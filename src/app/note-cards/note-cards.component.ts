import { Component, Input } from '@angular/core';
import { NotecardInterface } from '../interfaces/notecard-interface';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-note-cards',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './note-cards.component.html',
  styleUrl: './note-cards.component.css',
})
export class NoteCardsComponent {

  @Input() Note!:NotecardInterface;
}
 