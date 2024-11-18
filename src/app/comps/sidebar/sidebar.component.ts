import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {

  // Home Button Click

  @Output() sidebarHomeClick = new EventEmitter<void>();

  onHomeClick() {
    this.sidebarHomeClick.emit();
  }

// Search Button Click

  @Output() sidebarSearchClick = new EventEmitter<void>();

  onSearchClick(): void {
    this.sidebarSearchClick.emit();
  }

  // All Notes Button Click

  @Output() sidebarAllNotesClick = new EventEmitter<void>();

  onAllNotesClick(): void {
    this.sidebarAllNotesClick.emit();
  }

  // Subjects Button Click

  @Output() sidebarSubjectsClick = new EventEmitter<void>();

  onSubjectsClick(): void {
    this.sidebarSubjectsClick.emit();
  }

}
