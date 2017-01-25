import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'complex-form',
  templateUrl : './complex-form.component.html',
  styleUrls: ['./complex-form.component.css']
})

export class ComplexFormComponent implements OnInit {

  complexForm : FormGroup;

  constructor(fb: FormBuilder) {

    this.complexForm = fb.group({
      'firstName' : '',
      'lastName': '',
      'gender': 'Female',
      'hiking' : false,
      'running' : false,
      'swimming' : false,

    })

   }

   submitForm(value: any): void{
     console.log(" dane to ")
     console.log(value);
   }

  ngOnInit() {
  }

}
