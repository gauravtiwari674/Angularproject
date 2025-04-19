import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-organisation-login',
  standalone: false,
  templateUrl: './organisation-login.component.html',
  styleUrl: './organisation-login.component.css'
})
export class OrganisationLoginComponent {
  loginForm: FormGroup;
  submitted: boolean = false; 
  loginSuccess: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router : Router,
    private employeeService: EmployeeService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
    onSubmit() {
      this.submitted = true;
      if (this.loginForm.valid) {
        const {  email, password } = this.loginForm.value;
        const OrganisationData = { email, password };
  
        this.employeeService.OrganisationLogin(OrganisationData)
          .then(response => {
            console.log('OrganistionLoggedin:', response);
            this.loginSuccess = true;
            this.router.navigate(['/dashboard']);
          })
          .catch(error => {
              console.error('Login failed:', error);
        
            });
        }
}
  }
