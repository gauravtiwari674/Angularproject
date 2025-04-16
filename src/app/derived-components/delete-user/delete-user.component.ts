import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-delete-user',
  standalone: false,
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.css'
})
export class DeleteUserComponent {
  uuidToDelete: string = '';

  constructor(private employeeService: EmployeeService) {}

  deleteUser() {
    this.employeeService.deleteEmployeeById(this.uuidToDelete)
    .then(response => {
      console.log('User deleted:', response);
    })
    .catch(error => {
      console.error('Error deleting user:', error);
    });
  }
}
