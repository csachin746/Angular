import { Component } from '@angular/core';

@Component({
  selector: 'test-component',
  template: '<div class="conatiner"><img src="assets/1.jpg" alt="Your profile photo"></div>' ,
  styles: ['img { border-radius: 50%; height:10%; width:20%; margin: 10px; }; .conatiner{  margin: auto;  margin-top: 10px; width: 50%; border: 3px solid green; padding: 10px;}']
})
export class TestComponent {

}
