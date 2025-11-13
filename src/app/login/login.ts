import { CommonModule } from '@angular/common';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
 // email= '';
  //password= ''
 // recap: string = '';

 // login(a:any){
 //   this.recap=a.value.email
  //}

  //formkey= FormBuilder;
formkey: FormGroup;
  constructor(private fb:FormBuilder){
this. formkey = this.fb.group({

email: ['', []],
password:[''],
});

  }

  valider(){}


}

