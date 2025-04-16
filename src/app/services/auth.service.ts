import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth';
  private currentUser: any = null;

  async login(email: string, password: string): Promise<any> {
    try {
      const response = await axios.post(`${this.baseUrl}/login`, { email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async register(name: string, email: string, password: string): Promise<any> {
    try {
      const response = await axios.post(`${this.baseUrl}/register`, { name, email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

   // Check if the current user is an admin
   isAdmin(): boolean {
    return this.currentUser?.role === 'admin';
  }

  // Check if the current user is a watchman
  isWatchman(): boolean {
    return this.currentUser?.role === 'watchman';
  }


}
