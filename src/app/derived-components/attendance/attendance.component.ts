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
      window.alert('Attendance marked for:'+ uuid)
      console.log('Attendance marked for:', uuid);
    })
    .catch(error => {
      window.alert('Error marking attendance:'+ error)
      console.error('Error marking attendance:', error);
    });
  }
}
