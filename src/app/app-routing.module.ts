import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DataCatalogComponent } from './components/data-catalog/data-catalog.component';
import { SubjectComponent } from './components/subject/subject.component';
import { PublisherComponent } from './components/publisher/publisher.component';
import { SeleSubjectComponent } from './components/sele-subject/sele-subject.component';
import { DataSetDetailsComponent } from './components/data-set-details/data-set-details.component';
import { CodeOfRegisterComponent } from './components/code-of-register/code-of-register.component';
import { ForgetPassComponent } from './components/forget-pass/forget-pass.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'data-catalog', component: DataCatalogComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'publisher', component: PublisherComponent },
  { path: 'sele-subject', component: SeleSubjectComponent },
  {path:'data-set', component : DataSetDetailsComponent},
  {path:'publishers', component : PublisherComponent},
  {path:'login', component : LoginComponent},
  {path:'register', component : RegisterComponent},
  {path:'forgetPassword', component : ForgetPassComponent},
  {path:'code', component : CodeOfRegisterComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
