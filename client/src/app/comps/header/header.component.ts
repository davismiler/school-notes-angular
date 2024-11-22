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
  // Clock
  currentTime: string = "";
  currentDate: Date = new Date();
  private timer: any;

  ngOnInit(): void {
    this.updateTime();
    this.timer = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  private updateTime(): void {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    this.currentTime = `${hours}:${minutes}`;
  }

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
