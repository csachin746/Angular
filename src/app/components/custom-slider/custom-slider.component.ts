import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-slider',
  templateUrl: './custom-slider.component.html',
  styleUrls: ['./custom-slider.component.scss']
})
export class CustomSliderComponent {
  @Output() customEvent = new EventEmitter<string>();
  // @Input() value = 0;

  triggerCustomEvent() {
    const eventData = 'Hello from custom event!';
    this.customEvent.emit(eventData);
  }
// Customizing Input
// @Input({required: true}) value = 0;

// Input transforms
@Input({transform: toString}) label = '';
}
