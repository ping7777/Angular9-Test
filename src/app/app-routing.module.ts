import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewdetailComponent } from './viewdetail/viewdetail.component';

const routes: Routes = [
  {path: 'viewdetail/:id', component: ViewdetailComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
