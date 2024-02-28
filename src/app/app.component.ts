import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated

})
export class AppComponent {
  @Output() customEvent = new EventEmitter<string>();

  title = 'Angular';
  private  number :number = 123456

  get counter(){
    return this.number
  }

  set counter(value:number){ 
    this.number = value;
  }

  increment(){
    const eventData = 'Hello from custom event!';
    this.customEvent.emit(eventData);
    this.counter++;
  }

  decrement(){
    this.counter--;
  }
}

