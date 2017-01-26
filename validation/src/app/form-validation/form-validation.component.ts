import { Component } from '@angular/core';
import { ComplexFormComponent } from '../complex-form/complex-form.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'form-validation',
  templateUrl: '../complex-form/complex-form.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent {
//  implements OnInit
  complexForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.complexForm = fb.group({
      'firstName' : [null , Validators.required],
      'lastName': [null , Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      'gender': [null , Validators.required],
      'hiking' : false,
      'running' : false,
      'swimming' : false,
    })
   }

  // ngOnInit() {
  // }

  submitForm(value: any){
    console.log('z walidacji wartość to' + value );
  }
}
