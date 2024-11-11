import { LowerCasePipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SubjectInterface } from '../../core/interfaces/subject-interface';
import { noteService } from '../../core/services/note.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-note',
  standalone: true,
  imports: [RouterLink, NgIf, LowerCasePipe, FormsModule, ReactiveFormsModule],
  templateUrl: './new-note.component.html',
  styleUrl: './new-note.component.css',
})
export class NewNoteComponent {
  noteService: noteService = inject(noteService);
  subjectList: SubjectInterface[] = [];

  constructor() {
    this.subjectList = this.noteService.getAllSubjects();
  }

  isVisible: boolean = !false;
  showToggle() {
    this.isVisible = !this.isVisible;
  }

  onCategorySubmit(e: any) {
    console.log(e.value);

    this.noteService.addNewSubject({
      id: 10,
      name: e.value.name,
      color: e.value.color,
    });
    
  }
}
