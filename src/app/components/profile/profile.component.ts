import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/module/material/material.module';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule ,MaterialModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {
  widthValue = 300;
  heightValue = 300;
}
