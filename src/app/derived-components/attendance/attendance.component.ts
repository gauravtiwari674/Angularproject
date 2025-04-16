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

  onScanSuccess(uuid: string) {
    this.qrService.markAttendance(uuid)
    .then(response => {
      console.log('Attendance marked for:', uuid);
    })
    .catch(error => {
      console.error('Error marking attendance:', error);
    });
  }
}
