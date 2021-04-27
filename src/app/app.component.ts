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
  color = "green";
  data = [
    {
      name:'Atul',
      age: 28
    },
    {
      name:'Shivam',
      age: 29
    },
    {
      name:'Vidya',
      age: 25
    }
  ];

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

  getFormValues(form: any){
    console.warn(form);
  }
}
