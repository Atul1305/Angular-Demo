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
  color = "orange";
  err = true;
  parentData = "Mike";
  video21Url = 'https://www.youtube.com/watch?v=hJf7w-8_lJc&list=PL8p2I9GklV45JZerGMvw5JVxPSxCg8VPv&index=21';
  video22Url = 'https://www.youtube.com/watch?v=MmSoM19qUH8&list=PL8p2I9GklV45JZerGMvw5JVxP';
  video23Url = 'https://www.youtube.com/watch?v=-DsCFwPuC_k&list=PL8p2I9GklV45JZerGMvw5JVxPSxCg8VPv&index=23';
  video24Url = 'https://www.youtube.com/watch?v=yymtGNGyhuM&list=PL8p2I9GklV45JZerGMvw5JVxPSxCg8VPv&index=24';
  video25Url = 'https://www.youtube.com/watch?v=clpgSBh6t2Q&list=PL8p2I9GklV45JZerGMvw5JVxPSxCg8VPv&index=25';
  

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

  updateColor(){
    this.color = 'blue';
    this.err = !this.err;
  }
}
