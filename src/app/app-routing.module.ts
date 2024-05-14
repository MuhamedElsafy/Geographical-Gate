import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DataCatalogComponent } from './components/data-catalog/data-catalog.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'data-catalog', component: DataCatalogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
