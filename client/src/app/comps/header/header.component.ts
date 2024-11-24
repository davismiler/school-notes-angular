import { DatePipe, UpperCasePipe } from "@angular/common";
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from "@angular/core";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [DatePipe, UpperCasePipe],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent implements OnInit {
  // Clock & Date
  currentDate: Date = new Date();

  ngOnInit(): void {}

  // Search Input

  @Output() searchQuery = new EventEmitter<string>();

  searchNote(text: string) {
    this.searchQuery.emit(text);
  }

  // Focus Search Input
  @ViewChild("filter") searchInput!: ElementRef<HTMLInputElement>;

  focusSearchInput(): void {
    this.searchInput.nativeElement.focus();
  }
}
