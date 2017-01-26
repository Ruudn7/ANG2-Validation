import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'complex-form',
  templateUrl : './complex-form.component.html',
  styleUrls: ['./complex-form.component.css']
})

export class ComplexFormComponent implements OnInit {

  complexForm : FormGroup;

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

   submitForm(value: any): void{
    //  console.log(" dane to ")
    //  console.log(value);
   }

  ngOnInit() {
  }

}
