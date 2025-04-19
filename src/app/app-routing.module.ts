import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './derived-components/register/register.component';
import { DashboardComponent } from './derived-components/dashboard/dashboard.component';
import { AttendanceComponent } from './derived-components/attendance/attendance.component';
import { DeleteUserComponent } from './derived-components/delete-user/delete-user.component';
import { HomeComponent } from './derived-components/home/home.component';

import { adminGuard } from './guards/admin.guard';
import { watchmanGuard } from './guards/watchman.guard';
import { OrganisationLoginComponent } from './derived-components/organisation-login/organisation-login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: OrganisationLoginComponent },

  { path: 'dashboard', component: DashboardComponent },
  { path: 'attendance', component: AttendanceComponent,/* canActivate: [adminGuard] */},
  { path: 'delete-user', component: DeleteUserComponent, /*canActivate: [adminGuard] */},

  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
