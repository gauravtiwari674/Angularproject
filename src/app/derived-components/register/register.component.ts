import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import * as QRCode from 'qrcode';  // Import QRCode library

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone : false,
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  qrCode: string = '';  // To store the generated QR code
  registrationSuccess: boolean = false;  // Flag to display the success message
  submitted: boolean = false; 
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      const { name, email, password } = this.registerForm.value;
      const employeeData = { name, email, password };

      this.employeeService.registerEmployee(employeeData)
        .then(response => {
          console.log('Employee registered:', response);
          
          const uuid = response.uuid;  // Assuming backend returns UUID as 'uuid'
          this.generateQRCode(uuid);  // Generate QR code from UUID

          // Set registration success flag
          this.registrationSuccess = true;

        })
        .catch(error => {
          console.error('Registration failed:', error);
          this.registrationSuccess = false;
        });
    }
  }

  // Function to generate QR code from UUID
  generateQRCode(uuid: string) {
    QRCode.toDataURL(uuid)
      .then((url: string) => {
        this.qrCode = url; // Set the QR code image source
        console.log('Generated QR Code:', this.qrCode);
      })
      .catch((err: Error) => {
        console.error('Error generating QR code', err);
      });
  }
  
}
