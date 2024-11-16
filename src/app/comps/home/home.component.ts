import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { NoteCardsComponent } from '../note-cards/note-cards.component';
import { SubjectCardsComponent } from '../subject-cards/subject-cards.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { noteService } from '../../core/services/note.service';
import { NotecardInterface } from '../../core/interfaces/notecard-interface';
import { RouterLink } from '@angular/router';
import { SubjectInterface } from '../../core/interfaces/subject-interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    NoteCardsComponent,
    SubjectCardsComponent,
    NgFor,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // Open & Close Sidebar on Mobile
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }

  // Note Cards

  notesList: NotecardInterface[] = [];
  subjectList: SubjectInterface[] = [];

  noteService: noteService = inject(noteService);

  constructor() {
    this.notesList = this.noteService.getAllNotes();
    this.subjectList = this.noteService.getAllSubjects();
  }
  
}
