import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

    // Clock

    // time: string = '';

    // updateClock() {
    //   const now = new Date();
    //   const hours = String(now.getHours()).padStart(2, "0");
    //   const minutes = String(now.getMinutes()).padStart(2, "0");
    
    //   const timeString = `${hours}:${minutes}`;
    //   this.time = timeString;
    // }
    
    currentTime: string = '';
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

}
