import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CompanyModule } from './menu-components/company/company.module';
// import { CompanyComponent } from './menu-components/company/company.component';
// import { CompanyOverviewComponent } from './menu-components/company/company-overview/company-overview.component';
// import { CompanyOfficeComponent } from './menu-components/company/company-office/company-office.component';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { CompanyModule } from './menu-components/company/company.module';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }
]

@NgModule({
  declarations: [
    MainComponent
    // CompanyComponent,
    // CompanyOverviewComponent,
    // CompanyOfficeComponent,
    
  ],
  imports: [
    CommonModule,
    // CompanyModule
        RouterModule.forChild(routes),
        MaterialModule,
        CompanyModule

  ],
  exports:[
  //   CompanyComponent,
  //   CompanyOverviewComponent,
  //   CompanyOfficeComponent,
  ]

})
export class MainModule { }
