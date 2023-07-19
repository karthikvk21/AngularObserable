import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  constructor() { }

  private empSubject=new BehaviorSubject<employee[]>([]);


  setAllEmployees(data:employee){
    const currentEmployes = this.empSubject.getValue();
    currentEmployes.push(data);
    this.empSubject.next(currentEmployes);
  }
  getAllEmployees(): Observable<employee[]> {
    return this.empSubject.asObservable();
  }

}
