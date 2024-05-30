import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PasswordModule } from 'primeng/password';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InputOtpModule } from 'primeng/inputotp';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FooterComponent } from './components/footer/footer.component';
import { DataCatalogComponent } from './components/data-catalog/data-catalog.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { RouterModule } from '@angular/router';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { SubjectComponent } from './components/subject/subject.component';
import { PublisherComponent } from './components/publisher/publisher.component';
import { SeleSubjectComponent } from './components/sele-subject/sele-subject.component';
import { DataSetDetailsComponent } from './components/data-set-details/data-set-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CodeOfRegisterComponent } from './components/code-of-register/code-of-register.component';
import { ForgetPassComponent } from './components/forget-pass/forget-pass.component';
import { NewpasswordComponent } from './components/newpassword/newpassword.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditorModule } from 'primeng/editor';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AddPublisherComponent } from './components/add-publisher/add-publisher.component';
import { SettingPageComponent } from './components/setting-page/setting-page.component';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DataCatalogComponent,
    SubjectComponent,
    PublisherComponent,
    SeleSubjectComponent,
    DataSetDetailsComponent,
    LoginComponent,
    RegisterComponent,
    CodeOfRegisterComponent,
    ForgetPassComponent,
    NewpasswordComponent,
    AddDataComponent,
    AddPublisherComponent,
    SettingPageComponent,

   
    
  ],
  imports: [
    AccordionModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    BreadcrumbModule,
    RouterModule,
    TagModule,
    InputTextModule,
    FormsModule,
    RatingModule,
    PasswordModule,
    InputOtpModule,
    ChipsModule,
    DropdownModule,
    BrowserAnimationsModule,
    EditorModule,
    DialogModule,
    FileUploadModule,
    HttpClientModule,
    ToastModule,
    InputTextareaModule,
    TabViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
