import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule { }
