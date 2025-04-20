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
        this.scanMessage = 'Attendance marked successfully!';
        setTimeout(() => this.scanMessage = '', 3000); // Hide after 3s
        console.log('Attendance marked for:', uuid);
      })
      .catch(error => {
        this.scanSuccess = false;
        this.scanMessage = 'Error marking attendance. Please try again.';
        setTimeout(() => this.scanMessage = '', 3500); // Hide after 3.5s
        console.error('Error marking attendance:', error);
      });
  }
}
