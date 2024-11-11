import { Component, Input } from '@angular/core';
import { TruncatePipe } from '../../core/pipes/truncate.pipe';

@Component({
  selector: 'app-subject-cards',
  standalone: true,
  imports: [TruncatePipe],
  templateUrl: './subject-cards.component.html',
  styleUrl: './subject-cards.component.css',
})
export class SubjectCardsComponent {

  @Input ({alias: "subjectName"}) name: string ='';
  @Input ({alias: "subjectColor"}) color: string = '';
}
