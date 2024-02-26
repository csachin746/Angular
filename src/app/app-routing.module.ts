import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { TestComponent } from './components/selector /test/test.component';
import { CustomSliderComponent } from './components/custom-slider/custom-slider.component';
import { ChildComponent } from './components/child/child.component';

const routes: Routes = [
  {path:'test-components',component: TestComponent},
  { path:'profile',component: ProfileComponent }, 
  { path: 'profile',   redirectTo: '/profile', pathMatch: 'full' }, // redirect to `first-component`
  {path:'customSilder',component: CustomSliderComponent},
  {path:'Child ',component: ChildComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
