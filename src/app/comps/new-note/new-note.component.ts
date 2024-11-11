import { LowerCasePipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SubjectInterface } from '../../core/interfaces/subject-interface';
import { noteService } from '../../core/services/note.service';

@Component({
  selector: 'app-new-note',
  standalone: true,
  imports: [RouterLink, NgIf ,LowerCasePipe],
  templateUrl: './new-note.component.html',
  styleUrl: './new-note.component.css',
})
export class NewNoteComponent {
  // @ViewChild('subjectlist') mySelect!: ElementRef;

  // getSelectedValue(): void {
  //   const selectedValue = this.mySelect.nativeElement.value;
  //   console.log('Selected value:', selectedValue);
  // }

  noteService: noteService = inject(noteService);
  subjectList: SubjectInterface[] = [];

  constructor() {
    this.subjectList = this.noteService.getAllSubjects();
  }

  isOpenNewCategory: boolean = !false;

  showOpenNewCategory() {
    this.isOpenNewCategory = !this.isOpenNewCategory;
  }
}
