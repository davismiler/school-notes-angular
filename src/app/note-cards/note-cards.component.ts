import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-note-cards',
  standalone: true,
  imports: [NgFor],
  templateUrl: './note-cards.component.html',
  styleUrl: './note-cards.component.css',
})
export class NoteCardsComponent {}
