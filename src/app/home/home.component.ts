import { Component } from '@angular/core';
import { NoteCardComponent } from '../note-card/note-card.component';
import { NgFor } from '@angular/common';
import { TruncatePipe } from '../pipes/truncate.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NoteCardComponent, NgFor, TruncatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
