import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrganisationService } from '../../services/org.service';

@Component({
  selector: 'org-register',
  standalone:false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class OrgRegisterComponent {
  registerForm: FormGroup;
  registrationSuccess: boolean = false;  // Flag to display the success message
  submitted: boolean = false; 
  formError: string = ""
  constructor(
    private fb: FormBuilder,
    private organisationService: OrganisationService
  ) {
    this.registerForm = this.fb.group({
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      const { password, email } = this.registerForm.value;
      const organisationData = { password, email };

      this.organisationService.createOrg(organisationData)
        .then(response => {
          window.alert("Organisation registered successfully");
          this.registrationSuccess = true;
        })
        .catch(error => {
          console.error('Registration failed:', error);
          this.formError = JSON.stringify(error)
          this.registrationSuccess = false;
        });
    }
  }

  
}
