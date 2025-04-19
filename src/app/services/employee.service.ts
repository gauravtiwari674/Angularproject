import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080';

  async getAllEmployees(): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/organisation/employees`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async registerEmployee(employeeData: any): Promise<any> {
    try {
      const response = await axios.post(`${this.baseUrl}/register`, employeeData);
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
      const response = await axios.delete(`${this.baseUrl}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
