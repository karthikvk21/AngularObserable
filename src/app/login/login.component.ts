import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 constructor( private FB:FormBuilder,
  private router: Router,){}
 public loginform:FormGroup=new FormGroup({
  uname:new FormControl('', Validators.required),
  password:new FormControl('', Validators.required)
 })

 Login(){
  debugger;
  if(this.loginform.value.uname == "Karthik" && this.loginform.value.password =="Karthik"){
    this.router.navigate(['/home']);
  }
 }
 
}
