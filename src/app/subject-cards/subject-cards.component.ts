import { Component } from '@angular/core';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-subject-cards',
  standalone: true,
  imports: [TruncatePipe, NgFor],
  templateUrl: './subject-cards.component.html',
  styleUrl: './subject-cards.component.css',
})
export class SubjectCardsComponent {}
