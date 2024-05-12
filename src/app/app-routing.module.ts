import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvionsComponent } from './avions/avions.component';
import { AddAvionComponent } from './add-avion/add-avion.component';
import { UpdateAvionComponent } from './update-avion/update-avion.component';

const routes: Routes = [
  { path: 'avions', component: AvionsComponent },
  { path: 'add-avion', component: AddAvionComponent },
  { path: 'updateAvion/:id', component: UpdateAvionComponent },
  { path: '', redirectTo: 'avions', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
