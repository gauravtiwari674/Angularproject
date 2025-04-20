import { Component , OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { timestamp } from 'rxjs';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


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
  organisationId: string | null = '';

  constructor(
    private employeeService: EmployeeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) 
      this.organisationId = localStorage.getItem('organisationId');
    this.loadEmployees()
  }

  loadEmployees() {
    this.employeeService.getAllEmployees(this.organisationId)
      .then(response => {
        // Unwind and sort logs (descending)
        response.forEach((emp: any) => {
          // Sort logs descending by date
          const sortedLogs = [...emp.logs].sort((a: string, b: string) => {
            const parseDate = (str: string) => new Date(Date.parse(str.replace(' IST', '')));
            return parseDate(a).getTime() - parseDate(b).getTime();
          });
          sortedLogs.forEach(log => {
            this.employee.push({ id: emp.id, email: emp.email, log });
          });
          console.log(this.employee)
        });
      })
      .catch(err => console.error(err));
  }
  

  onDelete() {
    if (!this.employeeId) return;

    this.employeeService.deleteEmployeeById(this.employeeId)
      .then(() => {
        this.deleteSuccess = true;
        this.deleteError = '';
        this.employeeId = '';
        this.loadEmployees()
      })
      .catch(error => {
        this.deleteError = error?.message || 'Something went wrong.';
        this.deleteSuccess = false;
      });
  }

}
