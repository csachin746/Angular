import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePhotoComponent } from './profile-photo/profile-photo.component';

const routes: Routes = [
  { path: 'profile-photo', component: ProfilePhotoComponent },
  { path: '',   redirectTo: '/profile-photo', pathMatch: 'full' }, // redirect to `first-component`

  // { path: 'second-component', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
