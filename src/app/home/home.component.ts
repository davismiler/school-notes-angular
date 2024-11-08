import { Component } from '@angular/core';
import { NoteCardsComponent } from '../note-cards/note-cards.component';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { SubjectCardsComponent } from '../subject-cards/subject-cards.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    NoteCardsComponent,
    SubjectCardsComponent,
    TruncatePipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
