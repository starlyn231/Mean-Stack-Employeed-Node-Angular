import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ServiceService } from "../../services/service.service";
import { Employee } from "../../models/employee";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"],
})
export class EmployeeComponent implements OnInit {
  employee: any;
  constructor(public servicio: ServiceService) {}

  ngOnInit() {
    this.getEmpleado();
  }

  reseForm(form: NgForm) {
    form.reset();
  }
  getEmpleado() {
    this.servicio.getEmployees().subscribe(
      (res) => {
        this.servicio.employees = res;
        console.log(res);
      },
      (err) => console.log(err)
    );
  }

  addEmployee(form: NgForm) {
    if (form.value._id) {
      this.servicio.updateEmployee(form.value).subscribe(
        (res) => {
          console.log(res);
        },
        (err) => console.log(err)
      );
    } else {
      this.servicio.createEmployee(form.value).subscribe(
        (resp) => {
          this.getEmpleado();
          form.reset();
        },
        (err) => console.log(err)
      );
    }
  }
  deleteEmployee(id: string) {
    if (confirm("Are you sure you want to delete it?")) {
      this.servicio.deleteEmployee(id).subscribe(
        (resp) => {
          // este llamado de la funcion getEmpleado es para cargar la actualizacion luego de borrado.
          this.getEmpleado();
        },
        (err) => console.log(err)
      );
    }
  }

  editEmployee(employee: Employee) {
    // rellenar datos del formulario
    this.servicio.selectedEmployed = employee;
  }
}
