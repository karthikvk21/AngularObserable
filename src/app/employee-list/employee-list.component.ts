import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';
import { employee } from '../employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: employee[] = [];
  constructor(private empService:EmpserviceService){}
  ngOnInit(): void {
    this.empService.getAllEmployees().subscribe(res=>{
     this.employees = res; 
    });
  }
}
