import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {en_US, NgZorroAntdModule, NZ_I18N} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PatientsComponent} from './patients/patients.component';
import {LoginComponent} from './login/login.component';
import {LoginService} from "./services/login.service";
import {RoleGuardService} from "./services/security/role-guard.service";
import {ErrorInterceptor} from "./services/error-interceptor";
import {TokenInteceptorService} from "./services/security/token-interceptor.service";
import {AuthGuard} from "./services/security/auth.guard";
import { DoctorsComponent } from './doctors/doctors.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ContentsComponent } from './contents/contents.component';
import { PatientDetailsComponent } from './patients/patient-details/patient-details.component';
import { DoctorDetailsComponent } from './doctors/doctor-details/doctor-details.component';
import { AddPatientComponent } from './patients/add-patient/add-patient.component';
import {DoctorService} from "./services/doctor.service";
import {CancerRelatedPredefinedDataService} from "./services/cancer-related-predefined-data.service";


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PatientsComponent,
    LoginComponent,
    DoctorsComponent,
    StatisticsComponent,
    ContentsComponent,
    PatientDetailsComponent,
    DoctorDetailsComponent,
    AddPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: NZ_I18N, useValue: en_US}, LoginService, DoctorService, CancerRelatedPredefinedDataService, AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: TokenInteceptorService, multi:true}, {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi:true}, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
