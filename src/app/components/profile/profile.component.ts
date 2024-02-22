import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/module/material/material.module';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule ,MaterialModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.Emulated

})

export class ProfileComponent implements OnChanges {
  @Input() myCounter!:string;
  widthValue = 300;
  heightValue = 300;

  ngOnChanges(changes: SimpleChanges): void {
  console.log('ngOnChanges', changes);
    
  }
}
