import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.scss']
})
export class EmployeeRegistrationComponent {
  registrationStatus: string = '';
  constructor(private empService:EmpserviceService , private Fb:FormBuilder){}
  public Employeefrom:FormGroup =new FormGroup({
    fname:new FormControl("", Validators.required),
    lname:new FormControl("", Validators.required),
    email:new FormControl("", Validators.required),
    password:new FormControl("", Validators.required),
    eid:new FormControl("", Validators.required),
    mobile:new FormControl("", Validators.required),
  })
  addEmployee(){
    this.empService.setAllEmployees(this.Employeefrom.value)
    this.registrationStatus = 'REGISTERED SUCESSFULLY';
    setTimeout(() => {
      this.registrationStatus = ' ';
    }, 3000);
    this.Employeefrom.reset();
  }

}
