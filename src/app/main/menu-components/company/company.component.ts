import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
} from '@angular/core';
import { CompanyOverviewComponent } from './company-overview/company-overview.component';
import { CompanyService } from 'src/app/shared/services/company.service';
import { LogService } from 'src/app/shared/services/log.service.';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
@Input() data: any;

companyInfo: any = null;
companyLogo: any = null;


constructor( private companyService: CompanyService,
  private logService: LogService,){}

_selected_option = null;

updatedCompanyInfo($event:any){
  this.companyInfo = $event;
  // if(this.companyInfo){
  //   this.fetchCompanyLogo(this.companyInfo.id);
  // }

 
}

updateCompanyLogo(vfs_obj:any) {
  if (vfs_obj) {
    this.companyLogo = vfs_obj.id;
    
  }
}

// fetchCompanyLogo(companyId:any) {
//   this.companyService
//     .getLogo(companyId)
//     .subscribe((vfs:any) => this.updateCompanyLogo(vfs));
// }


// changeLogo(logo: File) {
//   this.companyService
//     .updateLogo(this.companyInfo.id, logo)
//     .subscribe((vfs:any) => this.updateCompanyLogo(vfs));
// }


_available_options = [
  {
    id: 'overview',
    label: 'OVERVIEW',
    tooltip: 'Details about the profile wiht option to view/edit',
  },
  {
    id: 'offices',
    label: 'OFFICES',
    tooltip: 'Details about the personal information.',
  },
  {
    id: 'departments',
    label: 'DEPARTMENTS',
    tooltip: 'Details about the personal information.',
  },
  {
    id: 'department_types',
    label: 'DEPARTMENT TYPES',
    tooltip: 'Details about the personal information.',
  },
  {
    id: 'designations',
    label: 'DESIGNATIONS',
    tooltip: 'Details about the personal information.',
  },
  {
    id: 'grades',
    label: 'GRADES',
    tooltip: 'Details about the personal information.',
  },
  {
    id: 'identifications',
    label: 'IDENTIFICATIONS',
    tooltip: 'Details about the personal information.',
  },
];



}
