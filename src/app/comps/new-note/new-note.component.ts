import { LowerCasePipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SubjectInterface } from '../../core/interfaces/subject-interface';
import { noteService } from '../../core/services/note.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-note',
  standalone: true,
  imports: [RouterLink, NgIf, FormsModule, ReactiveFormsModule],
  templateUrl: './new-note.component.html',
  styleUrl: './new-note.component.css',
})
export class NewNoteComponent {
  // Set default the selection
  selectedSubject = '';

  // Toggle Visibility
  isVisible: boolean = false;
  showToggle() {
    this.isVisible = !this.isVisible;
  }

  // Note Service
  noteService: noteService = inject(noteService);
  subjectList: SubjectInterface[] = [];

  constructor(private router: Router) {
    // Get all subject in select menu
    this.subjectList = this.noteService.getAllSubjects();
  }


  // Add a New Note (Reactive Form)

  subject = new FormControl('');
  title = new FormControl('');
  content = new FormControl('');

  onNewNoteSubmit() {
    console.log('Subject: ', this.subject.value);
    console.log('Title: ', this.title.value);
    console.log('Content: ', this.content.value);

    const now = new Date();

    this.noteService.addNote({
      id: 12,
      subject: this.subject.value ?? '',
      title: this.title.value ?? '',
      content: this.content.value ?? '',
      color: this.noteService.getSubjectColorByName(this.subject.value) ?? '',
      date: now.toISOString().split('T')[0],
      time: now.toTimeString().slice(0, 5),
    });

    this.router.navigate(['/']);
  }
}
