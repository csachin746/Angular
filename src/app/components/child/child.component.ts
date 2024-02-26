import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges{
  eventData: string | undefined;

  handleCustomEvent(data: string) {
    this.eventData = data;
  }
  @Input() myCounter!:number;
  public changeLog: string[] = []
  
  ngOnChanges(changes: SimpleChanges): void {
    for(const propName in changes) {
      const change: SimpleChange = changes[propName];
      const current =JSON.parse(change.currentValue);
      const previous =JSON.parse(change.previousValue);
      this.changeLog.push(
        // 'ngOnChanges ' ${propName}:currentValue=' + currentValue = 
      )
    }
  // console.log('ngOnChanges',changes);
  }

}
