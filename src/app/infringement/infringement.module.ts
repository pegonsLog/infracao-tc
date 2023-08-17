import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfringementRoutingModule } from './infringement-routing.module';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    InfringementRoutingModule,
    AngularMaterialModule
  ]
})
export class InfringementModule { }
