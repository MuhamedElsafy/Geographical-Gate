import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DataCatalogComponent } from './components/data-catalog/data-catalog.component';
import { SubjectComponent } from './components/subject/subject.component';
import { PublisherComponent } from './components/publisher/publisher.component';
import { SeleSubjectComponent } from './components/sele-subject/sele-subject.component';
import { DataSetDetailsComponent } from './components/data-set-details/data-set-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'data-catalog', component: DataCatalogComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'publisher', component: PublisherComponent },
  { path: 'sele-subject', component: SeleSubjectComponent },
  {path:'data-set', component : DataSetDetailsComponent},
  {path:'publishers', component : PublisherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
