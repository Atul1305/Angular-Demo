import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pNext App';
  myName = 'Atul Sharma';
  getName(name: any){
    alert(name)
  }

  myEvent(evt: any){
    console.warn(evt)
  }
}
