import { Component } from '@angular/core';
import { QrService } from '../../services/qr.service';

@Component({
  selector: 'app-attendance',
  standalone: false,
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css'
})
export class AttendanceComponent {
  constructor(private qrService: QrService) {}

  scanMessage: string = '';
  scanSuccess: boolean = false;

  onScanSuccess(uuid: string) {
    this.qrService.markAttendance(uuid)
      .then(response => {
        this.scanSuccess = true;
        this.scanMessage = response.message;
        setTimeout(() => this.scanMessage = '', 3000); // Hide after 3s
        console.log('Attendance marked for:', uuid);
      })
      .catch(error => {
        if(error.status == 409){
           this.scanMessage = "Your Attendance is already Completed for today.";
        }else if(error.status == 404){
          this.scanMessage =  "Employee Not Found.";
        }else{
          this.scanMessage = 'Error marking attendance. Please try again.';
        }
        this.scanSuccess = false;
        setTimeout(() => this.scanMessage = '', 3500); // Hide after 3.5s
      });
  }
}
