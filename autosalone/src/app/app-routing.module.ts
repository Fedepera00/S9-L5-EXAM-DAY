import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CarBrandsComponent } from './pages/car-brands/car-brands.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'carBrands/:brand', component: CarBrandsComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
