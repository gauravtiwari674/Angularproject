import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'https://wad-backend-8v50.onrender.com';

  async getAllEmployees(id:string | null): Promise<any> {
    try {
      if(!id){
        window.alert("OranisationID not found")
        window.location.href = '/home'
        return;
      }
      const response = await axios.get(`${this.baseUrl}/organisation/${id}/employees`);
      console.log(response)
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async registerEmployee(employeeData: any): Promise<any> {
    try {
      const response = await axios.post(`${this.baseUrl}/employee`, {
        organisationId:employeeData.organisationid,
        email:employeeData.email
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async OrganisationLogin(OrganisationData: any): Promise<any> {
    try {
      const response = await axios.post(`${this.baseUrl}/organisation/login`, OrganisationData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async deleteEmployeeById(id: string): Promise<any> {
    try {
      const response = await axios.delete(`${this.baseUrl}/employee/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
