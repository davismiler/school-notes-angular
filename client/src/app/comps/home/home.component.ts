import { Component, inject, signal, ViewChild } from "@angular/core";
import { NgFor, SlicePipe } from "@angular/common";
import { NoteCardsComponent } from "../note-cards/note-cards.component";
import { SubjectCardsComponent } from "../subject-cards/subject-cards.component";
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { noteService } from "../../core/services/note.service";
import { NotecardInterface } from "../../core/interfaces/notecard-interface";
import { RouterLink } from "@angular/router";
import { SubjectInterface } from "../../core/interfaces/subject-interface";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    NoteCardsComponent,
    SubjectCardsComponent,
    NgFor,
    RouterLink,
    SlicePipe,
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  MAX_NOTES_LIMIT = 9;
  notesCount = signal(this.MAX_NOTES_LIMIT);
  MAX_SUBJECTS_NO = 5;
  subjectsCount = signal(this.MAX_SUBJECTS_NO);

  isSubjectsVisible: boolean = true;
  isNotesVisible: boolean = true;

  // Open & Close Sidebar on Mobile
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    // console.log(this.isMenuOpen);
  }

  // Note Cards

  notesList: NotecardInterface[] = [];
  filteredNotesList: NotecardInterface[] = [];
  subjectList: SubjectInterface[] = [];

  noteService: noteService = inject(noteService);

  constructor() {
    this.notesList = this.noteService.getAllNotes();
    this.filteredNotesList = this.notesList;

    this.subjectList = this.noteService.getAllSubjects();
  }

  // Search result filtering

  searchQuery: string = "";

  filterNotes(text: string) {
    if (!text) {
      this.isSubjectsVisible = true;
      this.filteredNotesList = this.notesList;
    } else {
      this.isSubjectsVisible = false;
      this.searchQuery = text;
      this.filteredNotesList = this.notesList.filter((note) =>
        note?.title.toLowerCase().includes(text.toLowerCase())
      );
    }
  }

  // Subject Card filtering

  filterNotesBySubject(subject: SubjectInterface) {
    if (!subject) {
      this.isSubjectsVisible = true;
      this.filteredNotesList = this.notesList;
    } else {
      this.isSubjectsVisible = false;
      this.isNotesVisible = true;
      this.searchQuery = subject.name;
      this.filteredNotesList = this.notesList.filter(
        (note) => note.subject === subject.name
      );
    }
  }

  // Reset all filters and redirect Home
  resetAllFilters() {
    this.isSubjectsVisible = true;
    this.isNotesVisible = true;
    this.filteredNotesList = this.notesList;
  }

  // Show all notes on Home

  showAllNotes() {
    this.notesCount.set(1000);
    this.isNotesVisible = true;
  }

  // Show all Subjects on Home
  showAllSubjects() {
    this.subjectsCount.set(100);
    this.isNotesVisible = false;
  }
}
