import { Component , OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  employeeId: string = '';
  employee: any[] = [];
  deleteSuccess: boolean = false;
  deleteError: string = '';

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getAllEmployees()
    .then(response => {
      console.log(response)
      this.employee = response;
    })
    .catch(err => console.error(err));

}

// fetchEmployees() {
//   this.employeeService.getAllEmployees()
//   .then(response => {
//     this.extractedLogs = response.logs.map((log: string) => {
//       const parts = log.split(" ");
//       return {
//         employeeId: parts[1],
//         email: parts[5],
//         timestamp: parts[7]
//       };
//     });
//   })
//   .catch(err => console.error(err));
// }

onDelete() {
  if (!this.employeeId) return;

  this.employeeService.deleteEmployeeById(this.employeeId)
    .then(() => {
      this.deleteSuccess = true;
      this.deleteError = '';
      this.employeeId = '';
    })
    .catch(error => {
      this.deleteError = error?.message || 'Something went wrong.';
      this.deleteSuccess = false;
    });
}

}
