import { Component, inject } from '@angular/core';
import { noteService } from '../../core/services/note.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './category-settings.component.html',
  styleUrl: './category-settings.component.css',
})
export class CategorySettingsComponent {
  // Services
  noteService: noteService = inject(noteService);

  // Add New Subject using a Template Driven Form
  onCategorySubmit(e: any) {
    console.log(e.value);

    // Add a new Subject
    this.noteService.addSubject({
      id: 10,
      name: e.value.name,
      color: e.value.color,
    });
  }
}
