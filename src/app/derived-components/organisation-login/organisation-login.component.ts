import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-organisation-login',
  standalone: false,
  templateUrl: './organisation-login.component.html',
  styleUrl: './organisation-login.component.css'
})
export class OrganisationLoginComponent implements OnInit{
  loginForm: FormGroup;
  submitted: boolean = false; 
  loginSuccess: boolean = false;
  loginError:string = "";
  constructor(
    private fb: FormBuilder,
    private router : Router,
    private employeeService: EmployeeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
      if(localStorage.getItem("organisationId")){
        window.location.href = '/dashboard';
      }
  }

    onSubmit() {
      this.submitted = true;
      if (this.loginForm.valid) {
        const {  email, password } = this.loginForm.value;
        const OrganisationData = { email, password };
  
        this.employeeService.OrganisationLogin(OrganisationData)
          .then(response => {
            console.log('OrganistionLoggedin:', response);
            if (isPlatformBrowser(this.platformId)) 
                localStorage.setItem("organisationId",response.id)
            this.loginSuccess = true;
            this.router.navigate(['/dashboard']);
          })
          .catch(error => {
              if(error.status == 404){
                this.loginError = "Organisation Not Registered";
              }else if(error.status == 401){
                this.loginError = "Wrong Password";
              }else{
                this.loginError = "Some Error Occured";
              }
        
            });
        }
    } 
  }
