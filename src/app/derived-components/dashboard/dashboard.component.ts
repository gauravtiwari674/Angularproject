import { Component , OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  employees: any[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getAllEmployees()
    .then(data => {
      this.employees = data;
    })
    .catch(error => {
      console.error('Error fetching employees:', error);
    });
}

fetchEmployees() {
  this.employeeService.getAllEmployees()
    .then(data => {
      this.employees = data;
    })
    .catch(error => {
      console.error('Error fetching employees:', error);
    });
}

deleteUser(uuid: string) {
  this.employeeService.deleteEmployeeById(uuid)
    .then(() => {
      console.log('User deleted:', uuid);
      // Refresh the list
      this.fetchEmployees();
    })
    .catch(error => {
      console.error('Error deleting user:', error);
    });
}
}
