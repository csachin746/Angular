import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';
  private  number :number = 123456

  get counter(){
    return this.number
  }

  set counter(value:number){ 
    this.number = value;
    
  }

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }
}

