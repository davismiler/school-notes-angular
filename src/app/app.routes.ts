import { Routes } from '@angular/router';
import { HomeComponent } from './comps/home/home.component';
import { ViewNoteComponent } from './comps/view-note/view-note.component';
import { NewNoteComponent } from './comps/new-note/new-note.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'SchoolNotes - Keep your notes organized!',
  },
  {
    path: 'note/:id',
    component: ViewNoteComponent,
    title: 'Note',
  },
  {
    path: 'new',
    component: NewNoteComponent,
    title: 'New Note',
  },
];
