import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondScreenComponent } from './second-screen/second-screen.component';
import { FirstScreenComponent } from './first-screen/first-screen.component';
import { ThirdScreenComponent } from './third-screen/third-screen.component';



const routes: Routes = [
  { path: '', component: FirstScreenComponent },
  { path: 'second-screen', component: SecondScreenComponent },
  { path: 'third-screen', component: ThirdScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
