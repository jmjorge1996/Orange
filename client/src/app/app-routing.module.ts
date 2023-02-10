import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphicsCardListComponent } from './graphics-card-list/graphics-card-list.component';
import { GraphicCardItemComponent } from './graphic-card-item/graphic-card-item.component';

const routes: Routes = [
  {  path: '', component: GraphicsCardListComponent },
  {  path: 'graphics-cards', redirectTo: '', pathMatch: 'full' },
  {  path: 'graphics-cards/:idView', component: GraphicCardItemComponent },
  {  path:'**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
