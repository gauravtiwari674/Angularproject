import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { FormsModule } from '@angular/forms';

import { RegisterComponent } from './derived-components/register/register.component';
import { DashboardComponent } from './derived-components/dashboard/dashboard.component';
import { AttendanceComponent } from './derived-components/attendance/attendance.component';
import { DeleteUserComponent } from './derived-components/delete-user/delete-user.component';
import { HomeComponent } from './derived-components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    AttendanceComponent,
    DashboardComponent,
    DeleteUserComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ZXingScannerModule,
    FormsModule

  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
