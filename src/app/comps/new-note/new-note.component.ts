import { NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-note',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './new-note.component.html',
  styleUrl: './new-note.component.css',
})
export class NewNoteComponent {
  // @ViewChild('subjectlist') mySelect!: ElementRef;

  // getSelectedValue(): void {
  //   const selectedValue = this.mySelect.nativeElement.value;
  //   console.log('Selected value:', selectedValue);
  // }

  isOpenNewCategory: boolean = false;

  showOpenNewCategory() {
    this.isOpenNewCategory = !this.isOpenNewCategory;
  }
}
