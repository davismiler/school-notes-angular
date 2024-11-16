import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { SubjectInterface } from '../../core/interfaces/subject-interface';
import { noteService } from '../../core/services/note.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategorySettingsComponent } from '../category-settings/category-settings.component';
import { NotecardInterface } from '../../core/interfaces/notecard-interface';

@Component({
  selector: 'app-edit-note',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    CategorySettingsComponent,
  ],
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.css',
})
export class EditNoteComponent implements OnInit {
  // Set default values for inputs
  selectedSubject: string = '';

  // Note Service
  noteService: noteService = inject(noteService);
  subjectList: SubjectInterface[] = [];
  note: NotecardInterface | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {
    // Get Subjects
    this.subjectList = this.noteService.getAllSubjects();

    // Get Note Details to Edit
    const noteId = Number(this.route.snapshot.params['id']);
    this.note = this.noteService.getNoteById(noteId);
  }

  subject = new FormControl('');
  title = new FormControl('');
  content = new FormControl('');

  ngOnInit(): void {
    this.title.setValue(String(this.note?.title));
    this.selectedSubject = String(this.note?.subject);
    this.content.setValue(String(this.note?.content));
  }

  // Update Note

  onUpdateNoteSubmit() {
    console.log('Subject: ', this.subject.value);
    console.log('Title: ', this.title.value);
    console.log('Content: ', this.content.value);

    // this.noteService.updateNote();
    this.router.navigate(['/']);
  }
  
}
