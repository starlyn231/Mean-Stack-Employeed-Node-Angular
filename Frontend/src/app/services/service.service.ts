import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { Employee } from "../models/employee";
@Injectable({
  providedIn: "root",
})
export class ServiceService {
  url = "http://localhost:3000/api/employees";
  // este ojecto se llenara con ngModel desde el HTML
  selectedEmployed: Employee = {
    name: "",
    position: "",
    Departament: "",
    salary: 0,
  };
  employees: Employee[];
  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<Employee>(this.url).pipe(map((res: any) => res));
  }

  createEmployee(employee: Employee) {
    return this.http.post(this.url, employee);
  }
  deleteEmployee(_id: string) {
    return this.http.delete(`${this.url}/${_id}`);
  }
  updateEmployee(employee: Employee) {
    return this.http.put(`${this.url}/${employee._id}`, employee);
  }
}
