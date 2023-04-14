import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyOfficeComponent } from './company-office/company-office.component';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CompanyOverviewComponent } from './company-overview/company-overview.component';

@NgModule({
  declarations: [
    CompanyOverviewComponent,
    CompanyOfficeComponent
  
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    CompanyOverviewComponent,
    CompanyOfficeComponent
  ]


})
export class CompanyModule { }
