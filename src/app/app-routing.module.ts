import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { TestComponent } from './components/selector /test/test.component';
import { CustomSliderComponent } from './components/custom-slider/custom-slider.component';
import { ChildComponent } from './components/child/child.component';
import { CustomCardComponent } from './components/custom-card/custom-card.component';

const routes: Routes = [
  { path:'',component: TestComponent},
  { path:'profile',component: ProfileComponent }, 
  { path: 'test-components',   redirectTo: '/test-components', pathMatch: 'full' }, // redirect to `first-component`
  { path:'customSilder',component: CustomSliderComponent},
  { path:'Child',component: ChildComponent },
  { path:'customCard',component: CustomCardComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
