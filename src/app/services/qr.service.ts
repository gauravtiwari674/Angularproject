import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class QrService {

  private baseUrl = 'https://wad-backend-8v50.onrender.com';

  // Method to mark attendance
  async markAttendance(uuid: string): Promise<any> {
    try {
      if(!localStorage.getItem("organisationId")){
        window.location.href = "/home"
        return;
      }
      window.alert("Please Confirm User ID : "uuid)
      const response = await axios.post(`https://wad-backend-8v50.onrender.com/employee/${uuid}/attend/${localStorage.getItem("organisationId")}`);
      return response.data; // Return the response data
    } catch (error) {
      throw error; // Throw the error if something goes wrong
    }
  }

  // Method to generate QR code (simplified without Blob)
  // async generateQr(uuid: string): Promise<string> {
  //   try {
  //     const response = await axios.get(`${this.baseUrl}/generate/${uuid}`);
  //     return response.data;
  //    // Return the QR code as a string (URL or data URL)
  //   } catch (error) {
  //     throw error; // Throw the error if something goes wrong
  //   }
  // }
}
