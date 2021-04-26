import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pNext App';
  myName = 'Atul Sharma';
  currentVal  = '';
  diabledBox = true;
  show = true;

  getName(name: any){
    alert(name)
  }

  myEvent(evt: any){
    console.warn(evt)
  }

  getValue(val: any){
    console.warn(val);
    this.currentVal = val;
  }

  enableBox(){
    this.diabledBox = false;
  }


}
