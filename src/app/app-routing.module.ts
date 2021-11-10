import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FldetailsComponent } from './form/fldetails/fldetails.component';
import { EmaildetailsComponent } from './form/emaildetails/emaildetails.component';
import { FormbuttonComponent } from './form/formbutton/formbutton.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule,FormComponent,FldetailsComponent,EmaildetailsComponent,FormbuttonComponent],
  declarations: [
    FormComponent,
    FldetailsComponent,
    EmaildetailsComponent,
    FormbuttonComponent
  ]
})
export class AppRoutingModule { }
