import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-company-overview',
  templateUrl: './company-overview.component.html',
  styleUrls: ['./company-overview.component.scss']
})
export class CompanyOverviewComponent implements OnInit  {
  _currentAction = 'view';
  companyInfo: any = null;
  _flags: Set<string>;

  @Input() companyId = null;
  @Output() updateCompany = new EventEmitter<any>();

 
  errorMsg = '';
  isProcessing = false;
  companyDetails: FormGroup;
 
  _countries: Map<string, any> = new Map();



constructor(private formBuilder: FormBuilder,
  private http: HttpClient){
  this._flags = new Set<string>();
  this.companyDetails = this.formBuilder.group({
    legalname: [
      { value: '', disabled: this.isProcessing },
      Validators.required,
    ],
    name: [{ value: '', disabled: this.isProcessing }, Validators.required],
    fkcountrycode: [{ value: null, disabled: this.isProcessing }, Validators.required],
    phone: [{ value: '', disabled: this.isProcessing }],
    fax: [{ value: '', disabled: this.isProcessing }],
    email: [{ value: '', disabled: this.isProcessing }],
    website: [{ value: '', disabled: this.isProcessing }],
    whatsapp: [{ value: '', disabled: this.isProcessing }],
    linkedin: [{ value: '', disabled: this.isProcessing }],
    remarks: [{ value: '', disabled: this.isProcessing }],
  });

}
ngOnInit(): void{

}
_fetchCompany(): void{
  if(this.companyId){
    this.http.post('',{}).subscribe((info)=>{
      this.updateCompanyInfo(info);
      this.updateCompany.emit(this.companyInfo);
      // if(
      //   this.companyInfo.fkcountrycode && 
      //   !this._flags.has(this.companyInfo.fkcountrycode)
      // ){
        
      // }
  });
  
}
}

updateCompanyInfo(res:any): void {
   this.companyInfo = res;
   this.updateCompany.emit(this.companyInfo);
}


doAction(action:any): void {
  this.errorMsg = '';
  switch (action) {
    case 'edit':
      // this.updateFormData();
      this._currentAction = action;
      break;
    case 'save':
      // this.saveCompanyInformation();
      break;
    default:
      this._currentAction = 'view';
  }
  // this.refreshView();
}


// getFormData(): any {
//   return {
//     legalname: this.companyDetails.controls.legalname.value,
//     name: this.companyDetails.controls.name.value,
//     fkcountrycode: this.companyDetails.controls.fkcountrycode.value.code,
//     phone: this.companyDetails.controls.phone.value,
//     fax: this.companyDetails.controls.fax.value,
//     email: this.companyDetails.controls.email.value,
//     website: this.companyDetails.controls.website.value,
//     whatsapp: this.companyDetails.controls.whatsapp.value,
//     linkedin: this.companyDetails.controls.linkedin.value,
//     remarks: this.companyDetails.controls.remarks.value,
//   };
// }

// updateFormData(clear = false): void {
//   this.companyDetails.controls.legalname.setValue(
//     clear ? '' : this.companyInfo.legalname
//   );
//   this.companyDetails.controls.name.setValue(
//     clear ? '' : this.companyInfo.name
//   );
//   this.companyDetails.controls.fkcountrycode.setValue(
//     clear ? null : this._countries.get(this.companyInfo.fkcountrycode)
//   );
//   this.companyDetails.controls.phone.setValue(
//     clear ? '' : this.companyInfo.phone
//   );
//   this.companyDetails.controls.fax.setValue(
//     clear ? '' : this.companyInfo.fax
//   );
//   this.companyDetails.controls.email.setValue(
//     clear ? '' : this.companyInfo.email
//   );
//   this.companyDetails.controls.website.setValue(
//     clear ? '' : this.companyInfo.website
//   );
//   this.companyDetails.controls.whatsapp.setValue(
//     clear ? '' : this.companyInfo.whatsapp
//   );
//   this.companyDetails.controls.linkedin.setValue(
//     clear ? '' : this.companyInfo.linkedin
//   );
//   this.companyDetails.controls.remarks.setValue(
//     clear ? '' : this.companyInfo.remarks
//   );
// }


}
