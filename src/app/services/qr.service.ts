import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class QrService {

  private baseUrl = 'http://localhost:8080/api/qr';

  // Method to mark attendance
  async markAttendance(uuid: string): Promise<any> {
    try {
      const response = await axios.post(`${this.baseUrl}/attendance`, { uuid });
      return response.data; // Return the response data
    } catch (error) {
      throw error; // Throw the error if something goes wrong
    }
  }

  // Method to generate QR code (simplified without Blob)
  async generateQr(uuid: string): Promise<string> {
    try {
      const response = await axios.get(`${this.baseUrl}/generate/${uuid}`);
      return response.data;
     // Return the QR code as a string (URL or data URL)
    } catch (error) {
      throw error; // Throw the error if something goes wrong
    }
  }
}
