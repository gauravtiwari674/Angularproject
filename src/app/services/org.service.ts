import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  private baseUrl = 'https://wad-backend-8v50.onrender.com';

  // Method to mark attendance
  async createOrg(org: {email:String,password:String}): Promise<any> {
    try {
      const response = await axios.post(`https://wad-backend-8v50.onrender.com/organisation/register`,org);
      return response.data; // Return the response data
    } catch (error) {
      throw error; // Throw the error if something goes wrong
    }
  }

  async deleteOrg(id:string): Promise<any> {
    try {
      const response = await axios.delete(`https://wad-backend-8v50.onrender.com/organisation/${id}`);
      return response.data;
    } catch (error) {
      throw error; // Throw the error if something goes wrong
    }
  }
 

}
